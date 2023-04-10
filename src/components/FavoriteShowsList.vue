<script lang="ts" setup>
import FavoriteShowCard from '@/components/FavoriteShowCard.vue';
import type { Show } from '@/stores/tvMaze';

interface FavoriteShowsListProps {
  favoriteShows: Show[];
}

const props = defineProps<FavoriteShowsListProps>();
</script>

<template>
  <h4>Favorites</h4>
  <div v-if="!props.favoriteShows.length">No favorite shows added</div>
  <div v-else class="cards">
    <FavoriteShowCard
      :id="show.id"
      v-for="show in props.favoriteShows"
      :key="show.id"
      :image-src="show.image?.medium"
      :show-title="show.name"
    ></FavoriteShowCard>
  </div>
</template>

<style scoped>
h4 {
  font-size: 24px;
  line-height: 29px;
  margin: 34px 0 24px;
}
.cards {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  flex-wrap: wrap;
}
</style>
