<template>
    <nav class="breadcrumbs">
      <ol>
        <template v-for="(crumb, index) in breadCrumbs" :key="index">
          <li>
            <router-link :to="{ path: (crumb.disabled && '' || crumb.path) }">{{ crumb.text }}</router-link>
          </li>
        </template>
      </ol>
    </nav>
  </template>

<script setup lang="ts">
  import { computed  } from 'vue';
  import { compile } from 'path-to-regexp';
  import { useRoute } from "vue-router";

  interface Breadcrumbs {
    text: string;
    path: string;
    disabled?: boolean;
  }

  const route = useRoute();

  const breadCrumbs = computed((): Breadcrumbs[] => {
    const crumbs: Breadcrumbs[] = [];

    for (let i = 0; i<route.matched.length; i++) {
      const currentRoute = route.matched[i];
      const previousRoute = route.matched[i -1];
      if (currentRoute.path !== previousRoute?.path) {
        crumbs.push({ text: currentRoute.meta.breadCrumb as string, path: compile(currentRoute.path)(route.params) });
      }
    }

    return crumbs;
});

</script>
  