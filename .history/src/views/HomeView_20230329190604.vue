<script setup lang="ts">
  import BreadCrumbs from '@/components/BreadCrumbs.vue';
</script>

<template>
  <BreadCrumbs></BreadCrumbs>
  <main>
    <router-view></router-view>
  </main>
</template>