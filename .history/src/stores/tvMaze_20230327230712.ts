import { defineStore } from 'pinia';

// TODO: Look for proper types for tvmaze apis
interface TvMazeState {
    shows: any[];
}

export const useTvMazeStore = defineStore('tvMaze', {
    state: ():TvMazeState => ({
        shows: [],
    }),
    getters: {
        allShows(state) {
            return state.shows;
        },
        randomShows(state, n: number) {
            let result = new Array(n),
                len = state.shows.length,
                taken = new Array(len);
            if (n > len)
                throw new RangeError("getRandom: more elements taken than available");
            // while (n--) {
            //     const x = Math.floor(Math.random() * len);
            //     result[n] = arr[x in taken ? taken[x] : x];
            //     taken[x] = --len in taken ? taken[len] : len;
            // }
        }
    },
    actions: {
        async getShows() {
            const api = "https://api.tvmaze.com/shows";
    
            fetch(api)
                .then((response) => response.json())
                .then((data: any[]) => { this.shows = data; })
                .catch((error) => console.log(error));
        },
    },
});