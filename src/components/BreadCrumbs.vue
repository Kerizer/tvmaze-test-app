<template>
  <nav class="breadcrumbs">
    <ul>
      <template v-for="(crumb, index) in breadCrumbs" :key="index">
        <li>
          <router-link
            :class="`${crumb.isActive ? 'active' : ''}`"
            :to="{ path: (crumb.disabled && '') || crumb.path }"
            >{{ crumb.text }}</router-link
          >
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { compile } from 'path-to-regexp';
import { useRoute } from 'vue-router';

interface Breadcrumbs {
  text: string;
  path: string;
  isActive?: boolean;
  disabled?: boolean;
}

const route = useRoute();

const breadCrumbs = computed((): Breadcrumbs[] => {
  const crumbs: Breadcrumbs[] = [];

  for (let i = 0; i < route.matched.length; i++) {
    const currentRoute = route.matched[i];
    const previousRoute = route.matched[i - 1];
    if (currentRoute.path !== previousRoute?.path) {
      const crumbPath = compile(currentRoute.path)(route.params);
      crumbs.push({
        text: currentRoute.meta.breadCrumb as string,
        path: compile(currentRoute.path)(route.params),
        isActive: crumbPath === route.path
      });
    }
  }

  return crumbs;
});
</script>

<style scoped>
ul {
  align-items: center;
  display: flex;
  margin: 18px;
  padding-left: 0;
}
ul li {
  display: inline;
  list-style-type: none;
  margin-left: 0;
}
ul li:before {
  content: '/';
  padding-right: 5px;
  padding-left: 5px;
}
ul li:first-child:before {
  content: '';
  padding-right: 0;
  padding-left: 0;
}
ul li a {
  font-size: 16px;
  line-height: 19px;
  color: #333333;
}
.active {
  color: #777777;
}
</style>
