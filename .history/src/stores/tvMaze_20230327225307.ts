import { defineStore } from 'pinia';

interface 

export const useTvMazeStore = defineStore('tvMaze', {
    state: () => ({
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