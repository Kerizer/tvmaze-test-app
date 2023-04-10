<script setup lang="ts">
import { useTvMazeStore } from '@/stores/tvMaze';
import FavoriteShowsList from '@/components/FavoriteShowsList.vue';

const store = useTvMazeStore();
</script>

<template>
  <FavoriteShowsList :favorite-shows="store.favoriteShows" />
</template>
