<script setup lang="ts">
import ShowCard from '@/components/ShowCard.vue';
import { useTvMazeStore } from '@/stores/tvMaze';
</script>

<template>


    <h4>Random 3 films:</h4>
    <div class="cards">
      <ShowCard :id="show.id" :name="show.name" :image-src="show.image.medium" v-for="show in store.getRandomShows(3)" :key="show.id" :description="show.summary"></ShowCard>
    </div>

    <h4>All films:</h4>
    <ShowCard :id="show.id" :name="show.name" :image-src="show.image.medium" v-for="show in store.allShows" :key="show.id" :description="show.summary"></ShowCard>
</template>