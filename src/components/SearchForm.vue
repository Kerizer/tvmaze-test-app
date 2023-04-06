<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

    // const state = reactive({msg: ""});
    const msg = ref("");

    const router = useRouter();
    const redirectToSearch = () => {
        router.push(`/search/${msg.value}`)
    }


</script>

<template>
    <form @submit.prevent="redirectToSearch" action="">
        <input type="text" name="search" v-model.trim="msg" placeholder="Type your query" />
        <input type="submit" name="submit" value="search" />
        <p>{{ msg }}</p>
    </form>
</template>