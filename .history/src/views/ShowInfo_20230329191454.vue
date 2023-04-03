<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { useTvMazeStore } from '@/stores/tvMaze';
    import { onMounted, onUnmounted } from 'vue';
    import EpisodeCard from '@/components/EpisodeCard.vue'

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
        <EpisodeCard 
            :episodeNumber="episode.number"
            :seasonNumber="episode.season"
            v-for="episode in store.currentShowEpisodes" 
            :key="episode.id" 
            :id="episode.id" 
            :name="episode.name" 
            :description="episode.summary" 
            :image-src="episode.image.medium"
        />
    </div>
</template>