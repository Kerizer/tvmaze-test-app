<script setup lang="ts">
import { useTvMazeStore } from '@/stores/tvMaze';
import { ref } from 'vue';

    // const state = reactive({msg: ""});
    const msg = ref("");
    const store = useTvMazeStore();

    const doSearch = () => {
        store.getSearchResults(msg);
    }
</script>

<template>
    <form @submit="doSearch">
        <input type="text" name="search" v-model.trim="msg" placeholder="Type your query" />
        <input type="submit" name="submit" value="search" />
        <p>{{ msg }}</p>
    </form>
</template>