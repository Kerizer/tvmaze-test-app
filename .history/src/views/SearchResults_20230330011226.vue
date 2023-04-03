<script setup lang="ts">
import { useTvMazeStore } from '@/stores/tvMaze';
import { useRoute } from 'vue-router';
    const route = useRoute()
    const store = useTvMazeStore();
    const doSearch = () => {
        store.getSearchResults(route.params.search);
    }
</script>

<template>

</template>