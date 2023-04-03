<script setup lang="ts">
import { useTvMazeStore } from '@/stores/tvMaze';
import { onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
    const route = useRoute()
    const store = useTvMazeStore();

    onMounted(() => {
        store.getSearchResults(route.params.query.toString());
    })

    onUnmounted(() => {
        store.clearSearchResults();
    })
</script>

<template>
    <div>
        Looking for {{ route.params.query.toString() }}
    </div>
</template>