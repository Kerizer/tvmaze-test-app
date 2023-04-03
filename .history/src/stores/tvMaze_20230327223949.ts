import { defineStore } from 'pinia';

export const useTvMazeStore = defineStore('', {
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
                .then((data) => { console.log("data", data); this.shows = data; })
                .catch((error) => console.log(error));
        },
    },
});