import type { Show } from '@/stores/tvMaze';

export const mockShow: Show = {
  id: 1,
  url: 'https://example.com/shows/123',
  name: 'Example Show',
  type: 'Scripted',
  language: 'English',
  genres: ['Drama', 'Thriller'],
  status: 'Running',
  runtime: 60,
  premiered: '2022-01-01',
  officialSite: 'https://example.com/shows/example',
  schedule: {
    time: '20:00',
    days: ['Monday', 'Tuesday']
  },
  rating: {
    average: 8.5
  },
  weight: 92,
  network: {
    id: 1,
    name: 'Example Network',
    country: {
      name: 'United States',
      code: 'US',
      timezone: 'America/New_York'
    }
  },
  webChannel: null,
  externals: {
    tvrage: 12345,
    thetvdb: 67890,
    imdb: 'tt1234567'
  },
  image: {
    medium: 'https://example.com/shows/123/medium.jpg',
    original: 'https://example.com/shows/123/original.jpg'
  },
  summary: '<p>An example show about...</p>',
  updated: 1649701335,
  _links: {
    self: {
      href: 'https://api.example.com/shows/123'
    }
  },
  averageRuntime: 20,
  _embedded: {
    episodes: []
  }
};
