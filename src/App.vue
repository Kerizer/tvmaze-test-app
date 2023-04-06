<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import BreadCrumbs from '@/components/BreadCrumbs.vue';
</script>

<template>
  <header>
    <div class="wrapper">
        <BreadCrumbs />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
