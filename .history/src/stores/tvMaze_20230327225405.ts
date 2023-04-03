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