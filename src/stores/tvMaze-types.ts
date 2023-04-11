export interface Schedule {
  time: string;
  days: string[];
}
export interface Rating {
  average: number;
}
export interface Country {
  name: string;
  code: string;
  timezone: string;
}
export interface Network {
  id: number;
  name: string;
  country: Country;
}
export interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}
export interface Image {
  medium: string;
  original: string;
}
export interface Self {
  href: string;
}
export interface Previousepisode extends Self {}
export interface ShowLink extends Self {}
export interface CharacterLink extends Self {}
export interface _links {
  self?: Self;
  previousepisode?: Previousepisode;
  show?: ShowLink;
  character?: CharacterLink;
}
export interface _embedded {
  show?: Show;
  seasons?: Season[];
  episodes?: Episode[];
  cast?: Cast[];
  castcredits?: Castcredits[];
  crew?: Crew[];
  crewcredits?: Crewcredits[];
  akas?: Iaka[];
}
export interface Iaka {
  name: string;
  country: Country;
}
export interface Crewcredits {
  type: string;
  _links: _links;
}
export interface Castcredits {
  _links: _links;
}
export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: Image;
  summary: string;
  show: Show;
  rating: Rating;
  _links: _links;
}

export interface Season {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network: Network;
  webChannel: string | null;
  image: Image;
  summary: string;
  _links: _links;
}
export interface Updates {
  [key: number]: number;
}
export interface Person {
  id: number;
  url: string;
  country: Country;
  birtday: string;
  deathday: string | null;
  image: Image;
  _links: _links;
}
export interface Character {
  id: number;
  url: string;
  name: string;
  image: Image;
  _links: _links;
}
export interface Cast {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
}
export interface Crew {
  type: string;
  person: Person;
}
export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  premiered: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  webChannel: string | null;
  externals: Externals;
  image?: Image;
  summary: string;
  updated: number;
  ended?: string;
  network: Network;
  averageRuntime: number;
  _links: _links;
  _embedded?: _embedded;
}
export interface ShowSearch {
  score: number;
  show: Show;
}
export {};
