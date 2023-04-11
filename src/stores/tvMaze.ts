import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
// The module itself is broken, but typings are still working
import type { Ishow, Iepisode, IshowSearch, Inetwork, Iratring, Ischedule } from 'tvmaze-api-ts';
import { buildURLQuery } from '@/utils';
import type { Ref } from 'vue';

export interface Schedule extends Ischedule {}

// Typos in actual library
interface Network extends Inetwork {
  name: string;
}

export interface Show extends Ishow {
  // Typos in actual library
  rating: Iratring | null;
  network: Network;

  // Missing in library
  ended?: string;
  averageRuntime: number;
}

// For some reason library doesn't have the show in the interface
interface Episode extends Iepisode {
  show: Show;
  rating: Iratring;
}

type GroupedEpisodes = { [showId: number]: Episode[] };

type ShowWithEpisodes = {
  show: Show;
  episodes: Episode[];
};

interface SearchResults extends IshowSearch {
  show: Show;
}

interface CurrentShowInfo extends Show {
  _embedded: {
    episodes: Episode[];
  };
}

interface TvMazeState {
  shows: Show[];
  currentShowInfo?: CurrentShowInfo;
  currentShowEpisodes: Iepisode[];
  searchResults: SearchResults[];
  favoriteShows: Ref<Show[]>;
  upcomingShows: Show[];
}

const api = 'https://api.tvmaze.com';

const favoriteShows = useStorage<Show[]>('favoriteShows', []);

export const useTvMazeStore = defineStore('tvMaze', {
  state: (): TvMazeState => ({
    shows: [],
    currentShowInfo: undefined,
    currentShowEpisodes: [],
    searchResults: [],
    favoriteShows,
    upcomingShows: []
  }),
  getters: {
    isFavorite(state) {
      return (id: number) => Boolean(state.favoriteShows.find((show) => show.id === id));
    },
    getRandomShows(state) {
      return (n: number): Show[] => {
        const shuffledShows = [...state.shows].sort(() => Math.random() - 0.5);
        return shuffledShows.slice(0, n);
      };
    },
    getUpcomingShows(state) {
      return (n: number): Show[] => {
        return state.upcomingShows.slice(0, n);
      };
    },
    getSearchedShows(state) {
      return state.searchResults.reduce((acc: Show[], result: SearchResults) => {
        if (result.show) {
          return [...acc, result.show];
        }
        return [...acc];
      }, []);
    }
  },
  actions: {
    async getShows() {
      await fetch(`${api}/shows`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.shows = data;
        })
        .catch((error) => console.log(error));
    },
    async getShowInfo(id: number, shouldIncludeEpisodes: boolean = false) {
      const params = {
        embed: shouldIncludeEpisodes ? 'episodes' : ''
      };
      fetch(`${api}/shows/${id}?${buildURLQuery(params)}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.currentShowInfo = data;
        })
        .catch((error) => console.error(error));
    },
    async getEpisodesByShowId(showId: number) {
      fetch(`${api}/shows/${showId}/episodes`)
        .then((response) => response.json())
        .then((data) => {
          this.currentShowEpisodes = data;
        })
        .catch((error) => console.error(error));
    },
    async getSearchResults(searchTerm: string) {
      fetch(`${api}/search/shows?q=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          this.searchResults = data;
        })
        .catch((error) => console.error(error));
    },
    async addFavoriteShow(show: Show) {
      this.favoriteShows.push(show);
    },
    async removeFavoriteShow(id: Show['id']) {
      this.favoriteShows = this.favoriteShows.filter((show) => show.id !== id);
    },
    async getShowsWithUpcomingEpisodes(
      minEpisodes = 3,
      date = new Date().toISOString().slice(0, 10)
    ) {
      fetch(`${api}/schedule?country=US&date=${date}`)
        .then((response) => response.json())
        .then(async (data: Episode[]) => {
          // Sort the schedule by date in ascending order
          data.sort((a, b) => {
            return a.airdate.localeCompare(b.airdate);
          });

          // Group the schedule by show ID
          const groupedData: GroupedEpisodes = data.reduce(
            (groups: GroupedEpisodes, item: Episode) => {
              const showId = item.show.id;
              if (!groups[showId]) {
                groups[showId] = [];
              }
              groups[showId].push(item);
              return groups;
            },
            {}
          );

          // Map each group to a show object with its upcoming episodes
          const showsWithEpisodes: ShowWithEpisodes[] = Object.values(groupedData).map(
            (group: Episode[]) => {
              const show = group[0].show;
              const episodes = group.slice(0, 3);
              return { show, episodes };
            }
          );

          // Sort the shows by the next airstamp in ascending order
          showsWithEpisodes.sort((a, b) => {
            return a.episodes[0].airstamp.localeCompare(b.episodes[0].airstamp);
          });

          const upcomingShows: Show[] = showsWithEpisodes.reduce(
            (acc: Show[], show: ShowWithEpisodes) => {
              // Remove shows that already ended
              if (new Date(show.episodes[0].airstamp).getTime() < new Date().getTime()) {
                return acc;
              }
              return [...acc, show.show];
            },
            []
          );

          if (upcomingShows.length < minEpisodes) {
            const tomorrow = new Date().setDate(new Date(date).getDate() + 1);
            const store = useTvMazeStore();
            await store.getShowsWithUpcomingEpisodes(
              minEpisodes,
              new Date(tomorrow).toISOString().slice(0, 10)
            );
          }

          this.upcomingShows = [...this.upcomingShows, ...upcomingShows];
        })
        .catch((error) => console.error(error));
    },
    clearCurrentShowInfo() {
      this.currentShowInfo = undefined;
    },
    clearSearchResults() {
      this.searchResults = [];
    },
    clearShows() {
      this.shows = [];
    },
    clearUpcomingShows() {
      this.upcomingShows = [];
    }
  }
});
