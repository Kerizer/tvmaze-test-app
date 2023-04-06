<script lang="ts">
    import sanitizeHtml from 'sanitize-html';
    interface EpisodeCardProps {
        id: number;
        name: string
        episodeNumber: number;
        seasonNumber: number;
        imageSrc?: string
        description?: string
    }
</script>

<script setup lang="ts">
    const props = defineProps<EpisodeCardProps>()
</script>

<template>
    <div class="episode-card">
        <div>
            <img v-if="props.imageSrc" :src="props.imageSrc" :alt="`Poster for the episode called '${props.name}'`" />
            <div v-else></div>
        </div>
        <div>
            <h5 class="episode-title">{{`Season ${props.seasonNumber.toString()}, Episode ${props.episodeNumber.toString()}: ${props.name }`}}</h5>
            <div class="episode-description" v-html="sanitizeHtml(props.description || ``)"></div>
        </div>
    </div>
</template>