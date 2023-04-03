<script setup lang="ts">
import { useTvMazeStore } from '@/stores/tvMaze';
import { onMounted } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'


const store = useTvMazeStore();

onMounted(() => {
  console.log("mount");
  store.getShows();
});

console.log(store.allShows);

</script>

<template>
  <main>
    <div v-for="show in store.allShows">
      {{ show.name }}
    </div>
    <TheWelcome />
  </main>
</template>
