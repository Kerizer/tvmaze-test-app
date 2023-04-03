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
    <div>
        <img v-if="props.imageSrc" :src="props.imageSrc" :alt="`Poster for the show called '${props.name}'`" />
        <div v-else></div>
        {{ props.name }}
    </div>
</template>