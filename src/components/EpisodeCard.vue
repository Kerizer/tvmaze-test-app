<script lang="ts">
import sanitizeHtml from 'sanitize-html';
import noImage from '@/assets/No_image.png';
interface EpisodeCardProps {
  id: number;
  name: string;
  episodeNumber: number;
  seasonNumber: number;
  imageSrc?: string;
  description?: string;
  runtime: number | null;
  date: string;
  rating: number | null;
}
</script>

<script setup lang="ts">
const props = defineProps<EpisodeCardProps>();
</script>

<template>
  <div class="episode-card">
    <h5 class="episode-title">
      {{
        `Season ${props.seasonNumber.toString()}, Episode ${props.episodeNumber.toString()}: ${
          props.name
        }`
      }}
    </h5>
    <div class="episode-data">
      <div class="episode-poster">
        <img
          v-if="props.imageSrc"
          :src="props.imageSrc"
          :alt="`Poster for the episode called '${props.name}'`"
        />
        <img
          v-else
          :src="noImage"
          :alt="`There is no poster for the episode called '${props.name}', so it's a placeholder here`"
        />
      </div>
      <div class="episode-info">
        <div class="episode-description" v-html="sanitizeHtml(props.description || ``)"></div>
        <div class="episode-meta">
          <p>Date: {{ props.date }}</p>
          <p>Runtime: {{ props.runtime || 'N/A' }}</p>
          <p>Rating: {{ props.rating || 'N/A' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.episode-card {
  display: flex;
  margin: 20px 0;
  flex-direction: column;
}

.episode-data {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.episode-info {
  font-size: 14px;
  line-height: 17px;
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  flex: 1 1 15rem;
  min-width: 15rem;
}

.episode-poster {
  margin-right: 20px;
}

.episode-poster img {
  border-radius: 5px;
  height: 170px;
}

.episode-title {
  font-size: 18px;
  line-height: 22px;
}

.episode-description {
  margin-bottom: 5px;
  flex: 1;
}
</style>
