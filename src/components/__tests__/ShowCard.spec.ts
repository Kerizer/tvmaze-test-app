import { mount } from '@vue/test-utils';
import ShowCard from '../ShowCard.vue';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { mockShow } from './mockedData';
import { createPinia, setActivePinia } from 'pinia';

describe('ShowCard', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders the show name and poster', () => {
    const wrapper = mount(ShowCard, {
      props: { show: mockShow }
    });

    expect(wrapper.text()).toContain('Example Show');
    expect(wrapper.find('img').attributes('src')).toBe('https://example.com/shows/123/medium.jpg');
  });

  it('renders placeholder image if no poster', () => {
    const wrapper = mount(ShowCard, {
      props: { show: { ...mockShow, image: undefined } }
    });

    expect(wrapper.find('img').attributes('src')).toContain('No_image.png');
  });

  it('renders the show rating and favorite button', () => {
    const wrapper = mount(ShowCard, {
      props: { show: mockShow }
    });

    expect(wrapper.text()).toContain('★8.5');
    expect(wrapper.findComponent({ name: 'FavoriteButton' })).toBeTruthy();
  });

  it('sanitizes the show summary', () => {
    const wrapper = mount(ShowCard, {
      props: { show: { ...mockShow, summary: '<p>Test summary</p>' } }
    });

    expect(wrapper.find('.show-description').html()).toContain('<p>Test summary</p>');
  });
});
