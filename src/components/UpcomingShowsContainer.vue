<script setup lang="ts">
import ShowsList from '@/components/ShowsList.vue';
import { useTvMazeStore } from '@/stores/tvMaze';
// todo linting
// import { onMounted, onUnmounted } from 'vue';
import { onUnmounted } from 'vue';

const store = useTvMazeStore();

// onMounted(() => {
await store.getShowsWithUpcomingEpisodes(3);
// });

onUnmounted(() => {
  store.clearUpcomingShows();
});
</script>

<template>
  <ShowsList title="New episodes coming soon in:" :shows="store.getUpcomingShows(3)" />
</template>
