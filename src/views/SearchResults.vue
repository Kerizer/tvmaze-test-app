<script setup lang="ts">
import SearchForm from '@/components/SearchForm.vue';
import ShowsList from '@/components/ShowsList.vue';
import { useTvMazeStore } from '@/stores/tvMaze';
import { onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const store = useTvMazeStore();

store.getSearchResults(route.params.query.toString());

onUnmounted(() => {
  store.clearSearchResults();
});
</script>

<template>
  <SearchForm :query="route.params.query.toString()" />
  <ShowsList title="Searching results:" :shows="store.getSearchedShows" />
</template>
