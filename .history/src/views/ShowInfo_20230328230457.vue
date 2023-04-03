<script setup lang="ts">
    import { useRoute } from 'vue-router';

    const route = useRoute()
</script>

<template>
    <div>
        I am the info about the show {{ route.params.id }}
    </div>
</template>