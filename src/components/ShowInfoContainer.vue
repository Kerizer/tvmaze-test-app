<script lang="ts">
    interface ShowInfoContainerProps {
        showId: number;
    }
</script>

<script setup lang="ts">
    import { computed } from 'vue';
    import EpisodeCard from '@/components/EpisodeCard.vue'
    import ShowCard from '@/components/ShowCard.vue';
    import { useTvMazeStore } from '@/stores/tvMaze';

    
    const props = defineProps<ShowInfoContainerProps>()
    const store = useTvMazeStore();

    await store.getShowInfo(props.showId, true);

    const episodes = computed(() => {
        return store.currentShowInfo?._embedded?.episodes || [];
    });

    const show = computed(() => {
        return store.currentShowInfo;
    })

    const scheduled = computed(() => {
        const schedule = store.currentShowInfo?.schedule;
        if (!schedule || (!schedule.time && !schedule.days.length)) {
            return `N/A`;
        }
        const [hour, minute] = schedule.time.split(':');
        const formattedTime = schedule.time ? `${hour}:${minute.padStart(2, '0')}` : ``;

        if (schedule.days.length === 1) {
            return `Every ${schedule.days[0]} at ${formattedTime}`;
        }

        if (
            schedule.days.length === 5 &&
            schedule.days.includes('Monday') &&
            schedule.days.includes('Tuesday') &&
            schedule.days.includes('Wednesday') &&
            schedule.days.includes('Thursday') &&
            schedule.days.includes('Friday')
        ) {
            return `Every weekday at ${formattedTime}`;
        }

        const formattedDays = schedule.days
            .sort((a, b) => a.localeCompare(b))
            .reduce((result, day, index, array) => {
            if (index === 0) {
                result += day;
            } else if (index === array.length - 1) {
                result += ` and ${day}`;
            } else {
                result += `, ${day}`;
            }

            return result;
            }, '');

        return `Every ${formattedDays} at ${formattedTime}`;
    });
</script>

<template>
    <div v-if="show">
        <div class="show-main-info">
            <ShowCard :show="show"></ShowCard>
            <div class="show-details">
                <p>Network: {{ show.network?.name }}</p>
                <p>Show type: {{ show.type }}</p>
                <p>Language: {{ show.language }}</p>
                <p>Genres: {{ show.genres?.join(", ") }}</p>
                <p>Status: {{ show.status }}</p>
                <p>
                    Official site: 
                    <a v-if="Boolean(show.officialSite)" :href="show.officialSite">{{ show.officialSite}} </a> 
                    <span v-else>N/A</span>
                </p>
            </div>
        </div>
        <div class="aired-info">
            <p>Premiered: {{ show.premiered }}</p>
            <p>Ended: {{ show.ended }}</p>
            <p>Runtime average: {{ show.averageRuntime }}</p>
            <p>Schedule: {{ scheduled }}</p>
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
        :date="episode.airdate"
        :runtime="episode.runtime"
        :rating="episode.rating?.average"
    />
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