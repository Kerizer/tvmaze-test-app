<script type="ts">
    interface ShowCardProps {
        name: string
        imageSrc?: string
    }
</script>

<script setup lang="ts">

    const props = defineProps<ShowCardProps>()
</script>

<template>
    <img :src="props.imageSrc" :alt="`Poster for the show called '${props.name}'`" />
    {{ props.name }}
</template>