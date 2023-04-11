<script setup lang="ts">
import ShowsList from '@/components/ShowsList.vue';
import { useTvMazeStore } from '@/stores/tvMaze';
import { onUnmounted } from 'vue';

const store = useTvMazeStore();

await store.getShowsWithUpcomingEpisodes(3);

onUnmounted(() => {
  store.clearUpcomingShows();
});
</script>

<template>
  <ShowsList title="New episodes coming soon in:" :shows="store.getUpcomingShows(3)" />
</template>
