<script setup lang="ts">
    import SearchForm from '@/components/SearchForm.vue';
    import RandomShowsContainer from '@/components/RandomShowsContainer.vue';
    import UpcomingShowsContainer from '@/components/UpcomingShowsContainer.vue';
    import FavoriteShowsContainer from '@/components/FavoriteShowsContainer.vue';

</script>

<template>
    <SearchForm></SearchForm>
    <Suspense>
      <UpcomingShowsContainer />
      <template #fallback>
        <div class="cards">
        Loading...
        </div>
      </template>
    </Suspense>
    <Suspense>
      <RandomShowsContainer />  
      <template #fallback>
        <div class="cards">
        Loading...
        </div>
    </template>
    </Suspense>
    <FavoriteShowsContainer />

</template>

<style>
  .cards {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    flex-wrap: wrap;
  }
</style>