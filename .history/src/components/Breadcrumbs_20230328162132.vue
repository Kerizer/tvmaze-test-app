<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const crumbs = computed(() => {
        const route = useRoute();
        console.log(route);
        // let pathArray = this.$route.path.split("/")
        // pathArray.shift()
        // let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        //     breadcrumbArray.push({
        //     path: path,
        //     to: breadcrumbArray[idx - 1]
        //         ? "/" + breadcrumbArray[idx - 1].path + "/" + path
        //         : "/" + path,
        //     text: this.$route.matched[idx].meta.breadCrumb || path,
        //     });
        //     return breadcrumbArray;
        // }, [])
        // return breadcrumbs;
        return '123321';
    });
</script>

<template>
    <div>
        {{ crumbs }}
        <div class="container">
        </div>
    </div>
</template>