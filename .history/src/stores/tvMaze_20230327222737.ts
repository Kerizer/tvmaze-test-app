import { defineStore } from 'pinia';

export const useTvMazeStore = defineStore('', {
    state: () => ({
        shows: [],
    }),
    getters: {
        getAllShows(state) {
            return state.shows;
        },
    },
    actions: {
        getShows() {
            const api =
            "https://api.tvmaze.com/shows";
    
            fetch(api)
                .then((response) => response.json())
                .then(({ data }) => (this.shows = data))
                .catch((error) => console.log(error));
        },
    },
});