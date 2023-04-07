<script setup lang="ts">
import ShowCard from '@/components/ShowCard.vue';
import { useTvMazeStore } from '@/stores/tvMaze';
import { onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
    const route = useRoute()
    const store = useTvMazeStore();

    onMounted(() => {
        store.getSearchResults(route.params.query.toString());
    })

    onUnmounted(() => {
        store.clearSearchResults();
    })
</script>

<template>
    <div>
        <ShowCard
            v-for="show in store.searchResults"
            :key="show.show.id"
            :show="show.show"
        ></ShowCard>
    </div>
</template>