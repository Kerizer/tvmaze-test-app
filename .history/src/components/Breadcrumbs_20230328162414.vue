<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const crumbs = computed(() => {
        const route = useRoute();
        console.log(route);
        // let pathArray = route.split("/")
        // pathArray.shift()
        // let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        //     breadcrumbArray.push({
        //     path: path,
        //     to: breadcrumbArray[idx - 1]
        //         ? "/" + breadcrumbArray[idx - 1].path + "/" + path
        //         : "/" + path,
        //     text: route.matched[idx].meta.breadCrumb || path,
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
            {{ route }}
        </div>
    </div>
</template>