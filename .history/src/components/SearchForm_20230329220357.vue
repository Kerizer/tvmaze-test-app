<script setup lang="ts">

</script>

<template>
    <form>
        <input type="text" name="search" v-model.trim="msg" placeholder="Type your query" />
        <input type="submit" name="submit" value="search" />
    </form>
</template>