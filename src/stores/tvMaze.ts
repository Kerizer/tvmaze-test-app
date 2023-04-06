import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'
// The module itself is broken, but typings are still working
import type { Ishow, Iepisode, IshowSearch, Ischedule } from 'tvmaze-api-ts'

// For some reason library doesn't have the show in the interface
interface Episode extends Iepisode {
    show: Ishow;
}

type GroupedEpisodes = { [showId: number]: Episode[] };

type ShowWithEpisodes = {
    show: Ishow;
    episodes: Episode[];
};

interface TvMazeState {
    shows: Ishow[];
    currentShowInfo: any;
    currentShowEpisodes: Iepisode[];
    searchResults: IshowSearch[];
    favoriteShows: Ishow[];
    upcomingShows: Ishow[];
}

const api = "https://api.tvmaze.com";

const favoriteShows = useStorage('favoriteShows', []) as unknown as Ishow[];

export const useTvMazeStore = defineStore('tvMaze', {
    state: ():TvMazeState => ({
        shows: [],
        currentShowInfo: {},
        currentShowEpisodes: [],
        searchResults: [],
        favoriteShows,
        upcomingShows: [],
    }),
    getters: {
        allShows(state) {
            return state.shows;
        },
        isFavorite(state) {
            return (id: number) => Boolean(state.favoriteShows.find(show => show.id === id));
        },
        getRandomShows(state) {
            return (n: number): Ishow[] => {
                const result = new Array(n);
                let len = state.shows.length;
                const taken = new Array(len);

                // Return all the shows if asked for more than we have
                if (n > len) {
                    return state.shows;
                }


                while (n--) {
                    const x = Math.floor(Math.random() * len);
                    result[n] = state.shows[x in taken ? taken[x] : x];
                    taken[x] = --len in taken ? taken[len] : len;
                }
                return result;
            }
        },
        getUpcomingShows(state) {
            return (n: number): Ishow[] => {
                return state.upcomingShows.splice(0, n)
            }
        }
    },
    actions: {
        async getShows() {
            fetch(`${api}/shows`)
                .then((response) => response.json())
                .then((data) => { if (JSON.stringify(this.shows)!==data) { console.log("changed"); this.shows = data; } })
                .catch((error) => console.log(error));
        },
        async getShowInfo(id: number) {
            fetch(`${api}/shows/${id}`)
                .then((response) => response.json())
                .then((data) => { this.currentShowInfo = data; })
                .catch((error) => console.error(error));
        },
        async getEpisodesByShowId(showId: number) {
            fetch(`${api}/shows/${showId}/episodes`)
                .then((response) => response.json())
                .then((data) => { this.currentShowEpisodes = data; })
                .catch((error) => console.error(error));
        },
        async getSearchResults(searchTerm: string) {
            fetch (`${api}/search/shows?q=${searchTerm}`)
                .then((response) => response.json())
                .then((data) => { this.searchResults = data; })
                .catch((error) => console.error(error));
        },
        async addFavoriteShow(show: Ishow) {
            this.favoriteShows.push(show);
        },
        async removeFavoriteShow(id: Ishow["id"]) {
            this.favoriteShows = this.favoriteShows.filter((show) => show.id !== id);
        },
        async getShowsWithUpcomingEpisodes(n = 3) {
            fetch(`${api}/schedule?country=US&date=${new Date().toISOString().slice(0, 10)}`)
                .then((response) => response.json())
                .then((data: Episode[]) => {
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
                    const showsWithEpisodes: ShowWithEpisodes[] = Object.values(
                        groupedData
                    ).map((group: Episode[]) => {
                        const show = group[0].show;
                        const episodes = group.slice(0, 3);
                        return { show, episodes };
                    });
                
                    // Sort the shows by the next airdate in ascending order
                    showsWithEpisodes.sort((a, b) =>
                        a.episodes[0].airdate.localeCompare(b.episodes[0].airdate)
                    );

                    this.upcomingShows = showsWithEpisodes.map((showWithEpisodes) => (showWithEpisodes.show));
                })
                .catch((error) => console.error(error));
        },
        clearSearchResults() {
            this.searchResults = [];
        },
        clearEpisodes() {
            this.currentShowEpisodes = [];
        },
    },
});