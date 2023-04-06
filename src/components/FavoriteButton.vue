<script lang="ts">
    import { useTvMazeStore } from '@/stores/tvMaze';
    import type { Ishow } from 'tvmaze-api-ts';

    interface FavoriteButtonProps {
        show: Ishow;
    }
</script>

<script setup lang="ts">
    const props = defineProps<FavoriteButtonProps>()

    const store = useTvMazeStore();
    const addFavoriteShow = () => {
        store.addFavoriteShow(props.show);
    }
    const removeFavoriteShow = () => {
        store.removeFavoriteShow(props.show.id);
    }
</script>

<template>
    {{ store.isFavorite(show.id) }}
    <p v-if="!store.isFavorite(show.id)" @click.prevent="addFavoriteShow">Add to favorite</p>
    <p v-else @click.prevent="removeFavoriteShow">Remove from favorite</p>
</template>