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
        <button type="submit" name="submit">Search</button>
    </form>
</template>

<style scoped>
    form {
        justify-content: center;
        display: flex;
    }
    form input[type="text"] {
        padding: 10px 20px;
        margin-right: 10px;

        width: 60%;
        height: 49px;

        background: #FFFFFF;
        border: 1px solid #AAAAAA;
        border-radius: 5px;
    }
    form button[type="submit"] {
        padding: 10px 20px;

        width: 119px;
        height: 49px;

        background: #333333;
        border-radius: 5px;
        border: none;
        
        line-height: 29px;
        font-size: 24px;
        color: #FFFFFF;
    }
</style>