<script setup lang="ts">
import { RouterView } from 'vue-router';
import BreadCrumbs from '@/components/BreadCrumbs.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <BreadCrumbs />
    </div>
  </header>

  <RouterView :key="$route.fullPath" />
</template>

<style scoped></style>
