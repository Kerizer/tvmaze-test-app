import { defineStore } from 'pinia';
import { tvmaze, Tvmaze, type Ishow } from 'tvmaze-api-ts'

// TODO: Look for proper types for tvmaze apis
interface TvMazeState {
    shows: Ishow[];
}


class Mymaze extends Tvmaze {
    // code
    async getAllShows() {
        const api = "https://api.tvmaze.com/shows";
        const result = await fetch(api)
            .then((response) => response.json())
            .then((data: Ishow[]) => { return data; })
            .catch((error) => console.log(error));
        return result;
    }
}
  
  const mymaze = new Mymaze()

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
            tvmaze.shows.get("").then((data) => { this.shows = data; });
            // const api = "https://api.tvmaze.com/shows";
    
            // fetch(api)
            //     .then((response) => response.json())
            //     .then((data: any[]) => { this.shows = data; })
            //     .catch((error) => console.log(error));
        },
    },
});