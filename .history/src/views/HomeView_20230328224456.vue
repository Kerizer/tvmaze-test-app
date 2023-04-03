<script setup lang="ts">
  import BreadCrumbs from '@/components/BreadCrumbs.vue';
  import { useTvMazeStore } from '@/stores/tvMaze';
  import { onMounted } from 'vue';


  const store = useTvMazeStore();

  onMounted(() => {
    store.getShows();
  });

</script>

<template>
  <BreadCrumbs></BreadCrumbs>
  <main>
    <router-view></router-view>
  </main>
</template>