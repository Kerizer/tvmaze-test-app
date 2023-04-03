<script setup lang="ts">
    const id = defineProps<{
        id: number,
    }>()
</script>

<template>
    <div>
        I am the info about the show {{ id }}
    </div>
</template>