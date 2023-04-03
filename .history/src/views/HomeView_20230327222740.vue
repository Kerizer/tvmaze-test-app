<script setup lang="ts">
import { useTvMazeStore } from '@/stores/tvMaze';
import { onMounted } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'


const store = useTvMazeStore();

onMounted(() => {
  store.getAllShows();
});

console.log(store.shows);

</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
