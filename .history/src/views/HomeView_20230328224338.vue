<script setup lang="ts">
import BreadCrumbs from '@/components/BreadCrumbs.vue';
import { onMounted } from 'vue';


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

<style scoped>
  .cards {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    height: 220px;
  }
</style>