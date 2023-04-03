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
        Looking for {{ route.params.query.toString() }}
        <ShowCard
            v-for="show in store.searchResults"
            :key="show.show.id"
            :id="show.show.id"
            :name="show.show.name"
            :image-src="show.show.image.medium"
        ></ShowCard>
    </div>
</template>