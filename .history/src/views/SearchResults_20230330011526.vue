<script setup lang="ts">
import { useTvMazeStore } from '@/stores/tvMaze';
import { useRoute } from 'vue-router';
    const route = useRoute()
    const store = useTvMazeStore();
    const doSearch = () => {
        store.getSearchResults(route.params.query.toString());
    }
</script>

<template>
    <div>
        Looking for {{ route.params.query.toString() }}
    </div>
</template>