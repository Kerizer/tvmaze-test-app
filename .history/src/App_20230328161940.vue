<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import type BreadcrumbsVue from './components/Breadcrumbs.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <BreadcrumbsVue></BreadcrumbsVue>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
