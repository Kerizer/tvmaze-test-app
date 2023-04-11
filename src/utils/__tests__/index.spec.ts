import { describe, test, expect } from 'vitest';
import { buildSchedule } from '..';

describe('buildSchedule', () => {
  test('should return "N/A" when schedule is not provided', () => {
    expect(buildSchedule()).toBe('N/A');
  });

  test('should return "N/A" when schedule is provided but has no time or days', () => {
    const schedule = { time: '', days: [] };
    expect(buildSchedule(schedule)).toBe('N/A');
  });

  test('should return formatted schedule when schedule has only one day', () => {
    const schedule = { time: '14:30', days: ['Monday'] };
    expect(buildSchedule(schedule)).toBe('Every Monday at 14:30');
  });

  test('should return formatted schedule when schedule has multiple days', () => {
    const schedule = { time: '08:00', days: ['Monday', 'Wednesday', 'Friday'] };
    expect(buildSchedule(schedule)).toBe('Every Monday, Wednesday and Friday at 08:00');
  });

  test('should return formatted schedule for weekdays when schedule has all weekdays', () => {
    const schedule = {
      time: '12:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    };
    expect(buildSchedule(schedule)).toBe('Every weekday at 12:00');
  });

  test('should format time with leading zero when minutes are less than 10', () => {
    const schedule = { time: '09:5', days: ['Monday', 'Wednesday'] };
    expect(buildSchedule(schedule)).toBe('Every Monday and Wednesday at 09:05');
  });
});
