<script lang="ts">
    import { useTvMazeStore } from '@/stores/tvMaze';
    import type { Show } from '@/stores/tvMaze';

    interface FavoriteButtonProps {
        show: Show;
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
    <div class="favorite">
        <p v-if="!store.isFavorite(show.id)" @click.prevent="addFavoriteShow" class="add-favorite">♥</p>
        <p v-else @click.prevent="removeFavoriteShow" class="favorite remove-favorite">♥</p>
    </div>
</template>

<style scoped>
    .favorite {
        height: 24px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 24px;
        display: flex;
        align-items: center;

        flex: 1;
        color: #FFFFFF;
        text-shadow: 0px 0px 3px #000000;
    }

    .remove-favorite {
        cursor: pointer;
        opacity: 1;
    }
    
    .add-favorite {
        cursor: pointer;
        opacity: 0.3;
    }
</style>