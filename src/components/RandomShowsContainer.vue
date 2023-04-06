<script setup lang="ts">
    import ShowCard from '@/components/ShowCard.vue';
    import { useTvMazeStore } from '@/stores/tvMaze';
    import { onMounted, onUnmounted } from 'vue';


    const store = useTvMazeStore();

    // onMounted(() => {
        await store.getShows();
    // });

    onUnmounted(() => {
        store.clearShows();
    });
</script>

<template>
    <h4>Random 3 films:</h4>
    <div class="cards">
      <ShowCard v-for="show in store.getRandomShows(3)" :key="show.id" :show="show"></ShowCard>
    </div>
</template>