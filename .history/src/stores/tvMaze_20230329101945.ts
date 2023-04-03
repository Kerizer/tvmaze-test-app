import { defineStore } from 'pinia';
// The module itself is broken, but typings are still working
import type { Ishow } from 'tvmaze-api-ts'

interface TvMazeState {
    shows: Ishow[];
    currentShowInfo: any;
}
const api = "https://api.tvmaze.com/shows";

export const useTvMazeStore = defineStore('tvMaze', {
    state: ():TvMazeState => ({
        shows: [],
        currentShowInfo: {},
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
    
            fetch(api)
                .then((response) => response.json())
                .then((data: any[]) => { this.shows = data; })
                .catch((error) => console.log(error));
        },
        async getShowInfo(id: number) {
            fetch(api)
                .then((response) => response.json())
                .then((data: any[]) => { this.currentShowInfo = data; })
        },
    },
});