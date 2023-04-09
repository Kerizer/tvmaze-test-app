<script lang="ts">
    interface ShowInfoContainerProps {
        showId: number;
    }
</script>

<script setup lang="ts">
    import { computed } from 'vue';
    import EpisodeCard from '@/components/EpisodeCard.vue';
    import ShowInfo from '@/components/ShowInfo.vue';
    import { useTvMazeStore } from '@/stores/tvMaze';

    
    const props = defineProps<ShowInfoContainerProps>()
    const store = useTvMazeStore();

    await store.getShowInfo(props.showId, true);

    const episodes = computed(() => {
        return store.currentShowInfo?._embedded?.episodes || [];
    });


</script>

<template>
    <ShowInfo :show="store.currentShowInfo"></ShowInfo>


    <h4>Episodes</h4>
    <EpisodeCard 
        v-for="episode in episodes" 
        :key="episode.id" 
        :episode-number="episode.number"
        :season-number="episode.season"
        :id="episode.id" 
        :name="episode.name" 
        :description="episode.summary" 
        :image-src="episode.image?.medium"
        :date="episode.airdate"
        :runtime="episode.runtime"
        :rating="episode.rating?.average"
    />
</template>