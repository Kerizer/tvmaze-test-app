<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { useTvMazeStore } from '@/stores/tvMaze';
    import { onMounted, onUnmounted } from 'vue';

    const route = useRoute()



    const store = useTvMazeStore();

    onMounted(() => {
        store.getEpisodesByShowId(Number(route.params.id));
    });

    onUnmounted(() => {
        store.clearEpisodes();
    })
  
  </script>

<template>
    <div>
        I am the info about the show {{ route.params.id }}
        <h4>Episodes</h4>
        <EpisodeCard></EpisodeCard>
    </div>
</template>