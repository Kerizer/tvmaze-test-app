<script lang="ts">
    import sanitizeHtml from 'sanitize-html';
    import { useRouter } from 'vue-router';
    interface ShowCardProps {
        id: number;
        name: string
        imageSrc?: string
        description?: string
    }
</script>

<script setup lang="ts">
    const props = defineProps<ShowCardProps>()
    const router = useRouter();
    const goToShow = () => {
        router.push({ path: `shows/${props.id}`});
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
            <div class="description" v-html="sanitizeHtml(props.description || ``)"></div>
        </div>
    </div>
</template>

<style scoped>
    .show-card {
        flex-direction: row;
        display: flex;
        padding: 0px;
        width: 437.33px;
        height: 220px;
 
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 1;
    }

    .show-description {
        text-align: left;
        display: -webkit-box;
        -webkit-line-clamp: 3; /*define how many line you want to show */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>