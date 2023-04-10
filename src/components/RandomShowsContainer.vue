<script setup lang="ts">
import ShowsList from '@/components/ShowsList.vue';
import { useTvMazeStore } from '@/stores/tvMaze';
// todo linting broke
// import { onMounted, onUnmounted } from 'vue';
import { onUnmounted } from 'vue';

const store = useTvMazeStore();

// onMounted(() => {
await store.getShows();
// });

onUnmounted(() => {
  store.clearShows();
});
</script>

<template>
  <ShowsList title="Random 3 films:" :shows="store.getRandomShows(3)" />
</template>
