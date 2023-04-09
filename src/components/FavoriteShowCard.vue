<script lang="ts">
    interface FavoriteShowProps {
        id: number;
        imageSrc?: string;
        showTitle?: string;
    }
</script>

<script setup lang="ts">
    import { useTvMazeStore } from '@/stores/tvMaze';
import { useRouter } from 'vue-router';

    const props = defineProps<FavoriteShowProps>()
    
    const router = useRouter();

    const goToShow = () => {
        router.push({ path: `/shows/${props.id}`});
    }
    
    const store = useTvMazeStore();
    
    const removeFavoriteShow = () => {
        store.removeFavoriteShow(props.id);
    }
</script>

<template>
    <div class="favorite-show-card" @click.prevent="goToShow">
        <img v-if="props.imageSrc" :src="props.imageSrc" />
        <h5>{{ props.showTitle }}</h5>
        <span @click.stop="removeFavoriteShow">X</span>
    </div>
</template>

<style scoped>
    .favorite-show-card {
        max-width: 17%;
        flex: 1 0 17%;
        display: flex;
        margin-right: 90px;
        height: 40px;
        margin-bottom: 10px;
    }  
    .favorite-show-card img {
        width: 40px;
        border-radius: 5px;
        object-fit: cover;
    }
    .favorite-show-card h5 {
        width: 100%;
        /* text-align: center; */
        align-self: center;
        font-size: 18px;
        line-height: 40px;
        margin-left: 10px;
        text-overflow: ellipsis;
        display: inline;
        white-space: nowrap;
        overflow: hidden;
    }
    .favorite-show-card span {
        /* text-align: center; */
        align-self: center;
        font-size: 18px;
        line-height: 40px;
        margin-right: 10px;
        display: none;
    }

    .favorite-show-card:hover span {
        display: inherit;
    }

    .favorite-show-card:hover {
        cursor: pointer;
    }
    .favorite-show-card:hover h5 {
        text-decoration: underline;
    }
</style>