<script lang="ts">
    import sanitizeHtml from 'sanitize-html';
    import { useRouter } from 'vue-router';
    interface EpisodeCardProps {
        id: number;
        name: string
        imageSrc?: string
        description?: string
    }
</script>

<script setup lang="ts">
    const props = defineProps<EpisodeCardProps>()
    // const router = useRouter();
    // const goToShow = () => {
    //     router.push({ path: `/shows/${props.id}`});
    // }
</script>

<template>
    <div class="episode-card">
        <div>
            <img v-if="props.imageSrc" :src="props.imageSrc" :alt="`Poster for the episode called '${props.name}'`" />
            <div v-else></div>
        </div>
        <div>
            <h5 class="episode-title">{{ props.name }}</h5>
            <div class="episode-description" v-html="sanitizeHtml(props.description || ``)"></div>
        </div>
    </div>
</template>