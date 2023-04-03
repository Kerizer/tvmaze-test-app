<script setup lang="ts">
import ShowCard from '@/components/ShowCard.vue';
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
    <ShowCard :name="show.name" :image-src="show.image.medium" v-for="show in store.getRandomShows(3)" :key="show.id" :description="show.description"></ShowCard>

    <h4>All films:</h4>
    <ShowCard :name="show.name" :image-src="show.image.medium" v-for="show in store.allShows" :key="show.id"></ShowCard>
  </main>
</template>
