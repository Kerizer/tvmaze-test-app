<script setup lang="ts">
import { useTvMazeStore } from '@/stores/tvMaze';
import type { Show } from '@/stores/tvMaze';

interface FavoriteButtonProps {
  show: Show;
}

const props = defineProps<FavoriteButtonProps>();

const store = useTvMazeStore();
const addFavoriteShow = () => {
  store.addFavoriteShow(props.show);
};
const removeFavoriteShow = () => {
  store.removeFavoriteShow(props.show.id);
};
</script>

<template>
  <div class="favorite-controls">
    <button
      v-if="!store.isFavorite(show.id)"
      @click.prevent.stop="addFavoriteShow"
      class="favorite add-favorite"
    >
      ♥
    </button>
    <button v-else @click.prevent.stop="removeFavoriteShow" class="favorite remove-favorite">
      ♥
    </button>
  </div>
</template>

<style scoped>
.favorite-controls {
  display: flex;
  flex: 1;
  justify-content: flex-end;
}
.favorite {
  height: 24px;

  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  background: none;
  border: none;

  color: #ffffff;
  text-shadow: 0 0 3px #000000;
}

.remove-favorite {
  cursor: pointer;
  opacity: 1;
}

.add-favorite {
  cursor: pointer;
  opacity: 0.3;
}
</style>
