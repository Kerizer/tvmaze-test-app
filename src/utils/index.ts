import type { Schedule } from '@/stores/tvMaze';

export const buildURLQuery = (obj: { [key: string]: string }) =>
  Object.entries(obj)
    .map((pair) => pair.map(encodeURIComponent).join('='))
    .join('&');

export const buildSchedule = (schedule?: Schedule) => {
  if (!schedule || (!schedule.time && !schedule.days.length)) {
    return `N/A`;
  }

  const [hour, minute] = schedule.time.split(':');
  const formattedTime = schedule.time ? `${hour}:${minute.padStart(2, '0')}` : ``;

  if (schedule.days.length === 1) {
    return `Every ${schedule.days[0]} at ${formattedTime}`;
  }

  if (
    schedule.days.length === 5 &&
    schedule.days.includes('Monday') &&
    schedule.days.includes('Tuesday') &&
    schedule.days.includes('Wednesday') &&
    schedule.days.includes('Thursday') &&
    schedule.days.includes('Friday')
  ) {
    return `Every weekday at ${formattedTime}`;
  }

  const formattedDays = schedule.days
    .map((day) => {
      console.log(day);
      return day;
    })
    .reduce((result, day, index, array) => {
      if (index === 0) {
        result += day;
      } else if (index === array.length - 1) {
        result += ` and ${day}`;
      } else {
        result += `, ${day}`;
      }

      return result;
    }, '');

  return `Every ${formattedDays} at ${formattedTime}`;
};
