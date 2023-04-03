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
        getRandomShows(state) {
            return (n: number) => {
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
            const api = "https://api.tvmaze.com/shows";
    
            fetch(api)
                .then((response) => response.json())
                .then((data: any[]) => { this.shows = data; })
                .catch((error) => console.log(error));
        },
    },
});