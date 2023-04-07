<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { useTvMazeStore } from '@/stores/tvMaze';
    import { computed, onMounted, onUnmounted } from 'vue';
    import EpisodeCard from '@/components/EpisodeCard.vue'
    import ShowCard from '@/components/ShowCard.vue';

    const route = useRoute()

    const store = useTvMazeStore();

    onMounted(() => {
        // store.getEpisodesByShowId(Number(route.params.showId));
        store.getShowInfo(Number(route.params.showId), true);
    });

    const episodes = computed(() => {
        return store.currentShowInfo._embedded?.episodes || [];
    });

    const show = computed(() => {
        return store.currentShowInfo;
    })

    onUnmounted(() => {
        store.clearCurrentShowInfo();
    })
  </script>

<template>
    <div>
        <div>
            <div class="show-main-info">
                <ShowCard :show="show"></ShowCard>
                <div class="show-details">
                    <p>Network: {{ show.network?.name }}</p>
                    <p>Show type: {{ show.type }}</p>
                    <p>Language: {{ show.language }}</p>
                    <p>Genres: {{ show.genres?.join(", ") }}</p>
                    <p>Status: {{ show.status }}</p>
                    <p>Official site: {{ show.officialSite || `N/A` }}</p>
                </div>
            </div>
            <div class="aired-info">
                <p>Premiered: {{ show.premiered }}</p>
                <p>Ended: {{ show.ended }}</p>
                <p>Runtime average: {{ show.averageRuntime }}</p>
                <p>Schedule: </p>
            </div>
        </div>


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
        />
    </div>
</template>

<style scoped>
    .show-main-info {
        display: flex;
    }
    .show-details {
        flex: 1;
        height: fit-content;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        gap: 10px;

        border: 1px solid #D8D8D8;
        border-radius: 5px;
    }
</style>