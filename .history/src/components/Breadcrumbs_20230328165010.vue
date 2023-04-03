<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();

    const crumbs = computed(() => {
        const route = useRoute();
        let pathArray = route.path.split("/")
        pathArray.shift()

        return route.matched.map( item => ({
            to: item.path,
            title: item.meta.breadCrumb
        }));
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
        // return '123321';
    });
</script>

<template>
    <div>
        <RouterLink v-for="crumbs" :to="crumbs.to">{{crumbs.title}}</RouterLink>
        {{ crumbs }}
        <div class="container">
            {{ route }}
            <br /><br />
            {{ router }}
        </div>
    </div>
</template>