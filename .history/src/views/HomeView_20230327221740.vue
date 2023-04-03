<script setup lang="ts">
import { useTvMazeStore } from '@/stores/tvMaze';
import TheWelcome from '../components/TheWelcome.vue'


const store = useTvMazeStore();

</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
