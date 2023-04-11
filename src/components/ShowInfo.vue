<script setup lang="ts">
import type { Show } from '@/stores/tvMaze';
import ShowCard from '@/components/ShowCard.vue';
import { computed } from 'vue';

type ShowInfoComponent = {
  show?: Show;
};

const props = defineProps<ShowInfoComponent>();

const scheduled = computed(() => {
  // seems like good idea for 'utils' with 'tests'
  const schedule = props.show?.schedule;
  if (!schedule || (!schedule.time && !schedule.days.length)) {
    return `N/A`;
  }
  const [hour, minute] = schedule.time.split(':');
  const formattedTime = schedule.time ? `${hour}:${minute.padStart(2, '0')}` : ``;

  if (schedule.days.length === 1) {
    return `Every ${schedule.days[0]} at ${formattedTime}`;
  }

  if (
    schedule.days.length === 5 &&
    schedule.days.includes('Monday') &&
    schedule.days.includes('Tuesday') &&
    schedule.days.includes('Wednesday') &&
    schedule.days.includes('Thursday') &&
    schedule.days.includes('Friday')
  ) {
    return `Every weekday at ${formattedTime}`;
  }

  const formattedDays = schedule.days
    .sort((a, b) => a.localeCompare(b))
    .reduce((result, day, index, array) => {
      if (index === 0) {
        result += day;
      } else if (index === array.length - 1) {
        result += ` and ${day}`;
      } else {
        result += `, ${day}`;
      }

      return result;
    }, '');

  return `Every ${formattedDays} at ${formattedTime}`;
});
</script>

<template>
  <div v-if="props.show">
    <div class="show-main-info">
      <ShowCard :show="props.show"></ShowCard>
      <div class="show-details">
        <p>Network: {{ props.show.network?.name }}</p>
        <p>Show type: {{ props.show.type }}</p>
        <p>Language: {{ props.show.language }}</p>
        <p>
          Genres:
          {{
            props.show.genres && props.show.genres.length ? props.show.genres?.join(', ') : `N/A`
          }}
        </p>
        <p>Status: {{ props.show.status }}</p>
        <p>
          Official site:
          <a v-if="Boolean(props.show.officialSite)" :href="props.show.officialSite"
            >{{ props.show.officialSite }}
          </a>
          <span v-else>N/A</span>
        </p>
      </div>
    </div>
    <div class="aired-info">
      <p>Premiered: {{ props.show.premiered }}</p>
      <p>Ended: {{ props.show.ended }}</p>
      <p>Runtime average: {{ props.show.averageRuntime }}</p>
      <p>Schedule: {{ scheduled }}</p>
    </div>
  </div>
</template>

<style scoped>
.show-main-info {
  display: flex;
  flex-wrap: wrap;
}
.show-details {
  flex: 1;
  height: fit-content;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;

  border: 1px solid #d8d8d8;
  border-radius: 5px;
  min-width: 200px;
}
</style>
