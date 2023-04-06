<script setup lang="ts">
    import ShowCard from '@/components/ShowCard.vue';
    import { useTvMazeStore } from '@/stores/tvMaze';
    import { onMounted, onUnmounted } from 'vue';


    const store = useTvMazeStore();

    onMounted(() => {
        store.getShowsWithUpcomingEpisodes();
    });

    onUnmounted(() => {
        store.clearUpcomingShows();
    });
</script>

<template>
    <h4>Upcoming:</h4>
    <div class="cards">
      <ShowCard v-for="show in store.getUpcomingShows(3)" :key="show.id" :show="show"></ShowCard>
    </div>
</template>