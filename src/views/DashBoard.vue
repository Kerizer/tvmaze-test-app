<script setup lang="ts">
    import SearchForm from '@/components/SearchForm.vue';
    import RandomShowsContainer from '@/components/RandomShowsContainer.vue';
    import UpcomingShowsContainer from '@/components/UpcomingShowsContainer.vue';
    import FavoriteShowsContainer from '@/components/FavoriteShowsContainer.vue';

</script>

<template>
    <SearchForm></SearchForm>
    <RandomShowsContainer />
    <UpcomingShowsContainer />
    <FavoriteShowsContainer />

</template>

<style>
  .cards {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    height: 300px;
  }
</style>