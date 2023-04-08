<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { useTvMazeStore } from '@/stores/tvMaze';
    import { onUnmounted } from 'vue';
    import ShowInfoContainer from '@/components/ShowInfoContainer.vue';

    const route = useRoute()

    const store = useTvMazeStore();

    onUnmounted(() => {
        store.clearCurrentShowInfo();
    })
  </script>

<template>
    <Suspense>
      <ShowInfoContainer :showId="Number(route.params.showId)" />
      <template #fallback>
        Loading...
      </template>
    </Suspense>
</template>