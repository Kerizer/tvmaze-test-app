<script setup lang="ts">
import { ref } from 'vue';

    // const state = reactive({msg: ""});
    const msg = ref("");
</script>

<template>
    <form>
        <input type="text" name="search" v-model.trim="msg" placeholder="Type your query" />
        <input type="submit" name="submit" value="search" />
        <p>{{ msg }}</p>
    </form>
</template>