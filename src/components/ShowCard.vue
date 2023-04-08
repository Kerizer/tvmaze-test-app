<script lang="ts">
    import sanitizeHtml from 'sanitize-html';
    import { useRouter } from 'vue-router';
    import type { Show } from '@/stores/tvMaze';
    import FavoriteButton from './FavoriteButton.vue';

    interface ShowCardProps {
        show: Show;
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
        <div class="show-poster">
            <img @click="goToShow" v-if="props.show.image?.medium" :src="props.show.image?.medium" :alt="`Poster for the show called '${props.show.name}'`" />
            <div v-else></div>
            <div class="card-controls">
                <p class="show-rating">★{{ props.show.rating?.average }}</p>
                <FavoriteButton :show="props.show"></FavoriteButton>
            </div>
        </div>
        <div>
            <h5 class="show-title">{{ props.show.name }}</h5>
            <div class="show-description" v-html="sanitizeHtml(props.show.summary || ``)"></div>
        </div>
    </div>
</template>

<style scoped>
    .card-controls {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        padding: 4px;
        gap: 4px;

        position: absolute;
        left: 0px;
        width: 100%;
        bottom: 0px;
        
    }

    .show-rating {
        width: 22px;
        height: 24px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;

        color: #FFFFFF;

        text-shadow: 0px 0px 3px #000000;
        flex: 1;
        cursor: default;
    }
    .show-card {
        position: relative;
        flex-direction: row;
        display: flex;
        padding: 0px;
 
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 1;
        flex: 1;
        margin-right: 50px;
    }

    .show-poster img {
        width: 150px;
        border-radius: 5px;
    }

    .show-poster {
        margin-right: 20px;
        width: 150px;
        height: fit-content;
    }

    .show-title {
        font-size: 24px;
        line-height: 29px;
        display: -webkit-box;
        -webkit-line-clamp: 2; /*define how many line you want to show */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .show-description {
        margin-top: 10px;
        text-align: left;
        font-size: 14px;
        line-height: 17px;
        display: -webkit-box;
        -webkit-line-clamp: 8; /*define how many line you want to show */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>