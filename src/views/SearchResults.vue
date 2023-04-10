<script setup lang="ts">
import ShowCard from '@/components/ShowCard.vue';
import { useTvMazeStore } from '@/stores/tvMaze';
import { onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const store = useTvMazeStore();

// todo better in setup (hook: created), onMounted usually need for animation logic
// onMounted(() => {
store.getSearchResults(route.params.query.toString());
// });

onUnmounted(() => {
  store.clearSearchResults();
});
</script>

<template>
  <!-- add search -->
  <!-- better to create one wrapper, like ShowsList -->
  <div>
    <ShowCard v-for="show in store.searchResults" :key="show.show.id" :show="show.show" />
  </div>
</template>
