<script lang="ts">
    import sanitizeHtml from 'sanitize-html';
    import { useRouter } from 'vue-router';
    interface ShowCardProps {
        id: string;
        name: string
        imageSrc?: string
        description?: string
    }
</script>

<script setup lang="ts">
    const props = defineProps<ShowCardProps>()
    const router = useRouter();
    const goToShow = () => {
        router.push({ path: props.id});
    }
</script>

<template>
    <div class="show-card">
        <div @click="goToShow">
            <img v-if="props.imageSrc" :src="props.imageSrc" :alt="`Poster for the show called '${props.name}'`" />
            <div v-else></div>
        </div>
        <div class="show-description">
            <h5>{{ props.name }}</h5>
            <div v-html="sanitizeHtml(props.description || ``)"></div>
        </div>
    </div>
</template>

<style scoped>
    .show-card {
        /* Auto layout */
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;

        width: 437.33px;
        height: 220px;


        /* Inside auto layout */
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 1;
    }

    .show-description {
        
    }
</style>