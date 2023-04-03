<script setup lang="ts">
import { useTvMazeStore } from '@/stores/tvMaze';
import { onMounted } from 'vue';


const store = useTvMazeStore();

onMounted(() => {
  console.log("mount");
  store.getShows();
});

console.log(store.allShows);

</script>

<template>
  <main>

    <div v-for="show in store.randomShows(3)" :key="show.id">
      <img :src="show.image.medium" :alt="`Poster for the show called '${show.name}'`" />
      {{ show.name }}
    </div>

    <div v-for="show in store.allShows" :key="show.id">
      <img :src="show.image.medium" :alt="`Poster for the show called '${show.name}'`" />
      {{ show.name }}
    </div>
  </main>
</template>
