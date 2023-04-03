import { defineStore } from 'pinia';
// The module itself is broken, but typings are still working
import type { Ishow, Iepisode, IshowSearch } from 'tvmaze-api-ts'

interface TvMazeState {
    shows: Ishow[];
    currentShowInfo: any;
    currentShowEpisodes: Iepisode[];
    searchResults: IshowSearch[];
}
const api = "https://api.tvmaze.com";

export const useTvMazeStore = defineStore('tvMaze', {
    state: ():TvMazeState => ({
        shows: [],
        currentShowInfo: {},
        currentShowEpisodes: [],
        searchResults: [],
    }),
    getters: {
        allShows(state) {
            return state.shows;
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
        }
    },
    actions: {
        async getShows() {
            // mymaze.getAllShows().then((data) => { this.shows = data || []; });
    
            fetch(`${api}/shows`)
                .then((response) => response.json())
                .then((data: any[]) => { this.shows = data; })
                .catch((error) => console.log(error));
        },
        async getShowInfo(id: number) {
            fetch(`${api}/shows/${id}`)
                .then((response) => response.json())
                .then((data: any[]) => { this.currentShowInfo = data; })
        },
        async getEpisodesByShowId(showId: number) {
            fetch(`${api}/shows/${showId}/episodes`)
                .then((response) => response.json())
                .then((data: any[]) => { this.currentShowEpisodes = data; })
        },
        async getSearchResults(searchTerm: string) {
            fetch (`${api}/search/?q=${searchTerm}`)
                .then((response) => response.json())
                .then((data: any[]) => { this.currentShowEpisodes = data; })
        },  
        clearEpisodes() {
            this.currentShowEpisodes = [];
        },
    },
});