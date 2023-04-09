<script setup lang="ts">

import { useTvMazeStore } from '@/stores/tvMaze';
import FavoriteShowCard from './FavoriteShowCard.vue';


const store = useTvMazeStore();
</script>

<template>
    <h4>Favorites</h4>
    <div v-if="!store.favoriteShows.length">
      No favorite shows added
    </div>
    <div v-else class="cards">
      <FavoriteShowCard :id="show.id" v-for="show in store.favoriteShows" :key="show.id" :image-src="show.image?.medium" :show-title="show.name"></FavoriteShowCard>
    </div>
</template>

<style scoped>
  h4 {
    font-size: 24px;
    line-height: 29px;
    margin: 34px 0 24px;
  }
</style>