<script setup lang="ts">
    import ShowCard from '@/components/ShowCard.vue';
    import { useTvMazeStore } from '@/stores/tvMaze';
    import { onMounted, onUnmounted } from 'vue';


    const store = useTvMazeStore();

    // onMounted(() => {
        await store.getShowsWithUpcomingEpisodes(3);
    // });

    onUnmounted(() => {
        store.clearUpcomingShows();
    });
</script>

<template>
    <h4>New episodes coming soon in:</h4>
    <div class="cards">
      <ShowCard v-for="show in store.getUpcomingShows(3)" :key="show.id" :show="show"></ShowCard>
    </div>
</template>

<style scoped>
  h4 {
    font-size: 24px;
    line-height: 29px;
    margin: 34px 0 24px;
  }
</style>