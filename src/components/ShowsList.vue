<script setup lang="ts">
import ShowCard from '@/components/ShowCard.vue';
import type { Show } from '@/stores/tvMaze';

interface ShowsListProps {
  shows: Show[];
  title: string;
}

const props = defineProps<ShowsListProps>();
</script>

<template>
  <h4>{{ props.title }}</h4>
  <div class="cards">
    <ShowCard v-for="show in props.shows" :key="show.id" :show="show" />
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  flex-wrap: wrap;
}

h4 {
  font-size: 24px;
  line-height: 29px;
  margin: 34px 0 24px;
}
</style>
