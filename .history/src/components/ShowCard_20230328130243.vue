<script lang="ts">
    interface ShowCardProps {
        name: string
        imageSrc?: string
    }
</script>

<script setup lang="ts">

    const props = defineProps<ShowCardProps>()
</script>

<template>
    <div class="show-card">
        <img v-if="props.imageSrc" :src="props.imageSrc" :alt="`Poster for the show called '${props.name}'`" />
        <div v-else></div>
        {{ props.name }}
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
</style>