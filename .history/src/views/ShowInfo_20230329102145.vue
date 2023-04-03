<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { useTvMazeStore } from '@/stores/tvMaze';
    import { onMounted } from 'vue';

    const route = useRoute()



    const store = useTvMazeStore();

    onMounted(() => {
        store.getShows();
    });
  
  </script>

<template>
    <div>
        I am the info about the show {{ route.params.id }}
    </div>
</template>