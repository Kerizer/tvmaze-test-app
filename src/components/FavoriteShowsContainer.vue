<script setup lang="ts">

import ShowCard from '@/components/ShowCard.vue';
import { useTvMazeStore } from '@/stores/tvMaze';


const store = useTvMazeStore();
</script>

<template>
    <h4>Favorites</h4>
    <div class="cards">
      <ShowCard v-for="show in store.favoriteShows" :key="show.id" :show="show"></ShowCard>
    </div>
</template>