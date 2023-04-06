<script setup lang="ts">
    import ShowCard from '@/components/ShowCard.vue';
    import { useTvMazeStore } from '@/stores/tvMaze';
    import { onMounted } from 'vue';


    const store = useTvMazeStore();

    onMounted(() => {
        store.getShows();
    });
</script>

<template>
    <h4>Random 3 films:</h4>
    <div class="cards">
      <ShowCard v-for="show in store.getRandomShows(3)" :key="show.id" :show="show"></ShowCard>
    </div>
</template>