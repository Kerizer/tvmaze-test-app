<script setup lang="ts">
import ShowsList from '@/components/ShowsList.vue';
import { useTvMazeStore } from '@/stores/tvMaze';
import { onUnmounted } from 'vue';

const store = useTvMazeStore();

await store.getShows();

onUnmounted(() => {
  store.clearShows();
});
</script>

<template>
  <ShowsList title="Random 3 films:" :shows="store.getRandomShows(3)" />
</template>
