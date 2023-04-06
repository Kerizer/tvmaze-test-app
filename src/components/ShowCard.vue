<script lang="ts">
    import sanitizeHtml from 'sanitize-html';
    import { useRouter } from 'vue-router';
    import type { Ishow } from 'tvmaze-api-ts';
import FavoriteButton from './FavoriteButton.vue';

    interface ShowCardProps {
        show: Ishow;
    }
</script>

<script setup lang="ts">
    const props = defineProps<ShowCardProps>()
    const router = useRouter();
    const goToShow = () => {
        router.push({ path: `/shows/${props.show.id}`});
    }
</script>

<template>
    <div class="show-card">
        <div @click="goToShow">
            <img v-if="props.show.image?.medium" :src="props.show.image?.medium" :alt="`Poster for the show called '${props.show.name}'`" />
            <div v-else></div>
        </div>
        <FavoriteButton :show="props.show"></FavoriteButton>
        <div>
            <h5 class="show-title">{{ props.show.name }}</h5>
            <div class="show-description" v-html="sanitizeHtml(props.show.summary || ``)"></div>
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
        -webkit-line-clamp: 11; /*define how many line you want to show */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>