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
    <div class="cards">
      <ShowCard :id="show.id" :name="show.name" :image-src="show.image.medium" v-for="show in store.getRandomShows(3)" :key="show.id" :description="show.summary"></ShowCard>
    </div>

    <h4>All films:</h4>
    <ShowCard :id="show.id" :name="show.name" :image-src="show.image.medium" v-for="show in store.allShows" :key="show.id" :description="show.summary"></ShowCard>
  </main>
</template>

<style scoped>
  .carrds {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    height: 220px;
  }
</style>