<script setup lang="ts">
import { useTvMazeStore } from '@/stores/tvMaze';
import { onMounted } from 'vue';


const store = useTvMazeStore();

onMounted(() => {
  store.getShows();
});

</script>

<template>
  <main>

    <h4>Random 3 films:</h4>
    <div v-for="show in store.getRandomShows(3)" :key="show.id">
      <img :src="show.image.medium" :alt="`Poster for the show called '${show.name}'`" />
      {{ show.name }}
    </div>

    <h4>All films:</h4>
    <div v-for="show in store.allShows" :key="show.id">
      <img :src="show.image.medium" :alt="`Poster for the show called '${show.name}'`" />
      {{ show.name }}
    </div>
  </main>
</template>
