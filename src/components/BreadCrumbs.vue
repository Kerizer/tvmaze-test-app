<template>
    <nav class="breadcrumbs">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <template v-for="(crumb, index) in breadcrumbItems">
          <li :key="index" v-if="index !== breadcrumbItems.length - 1">
            <router-link :to="{ path: crumb.path }">{{ crumb.text }}</router-link>
          </li>
          <li :key="`curr-${index}`" v-else>
            {{ crumb.text }}
          </li>
        </template>
      </ul>
    </nav>
  </template>
  
  <script>
  
import routesManifest from '@/router/manifest';
  export default {
    computed: {
        breadcrumbItems() {
            const pathSegments = this.$route.path.split('/').filter(segment => segment !== '')
            let breadcrumbs = []

            for (let i = pathSegments.length; i > 0; i--) {
                const pathSegment = pathSegments.slice(0, i).join('/')
                const matchingRoute = routesManifest.find(route => route.path === `/${pathSegment}`)

                if (!matchingRoute) {
                    continue
                }

                breadcrumbs = this.getMatchingBreadcrumb(matchingRoute, pathSegments.slice(i).join('/'), breadcrumbs)
                break
            }

            breadcrumbs.push({ text: this.$route.meta.breadCrumb || this.$route.name, disabled: true })

            return breadcrumbs.reverse()
        },
    },
  
    methods: {
        getMatchingBreadcrumb(route, pathSegment, breadcrumbs = []) {
            if (!pathSegment) {
                return breadcrumbs
            }

            const matchingRoute = route.children && route.children
                .slice()
                .reverse()
                .find(child => child.path === `/${pathSegment}` || child.path.includes(`:${pathSegment}`))

            if (!matchingRoute) {
                return breadcrumbs
            }

            breadcrumbs.push({ text: matchingRoute.meta?.breadCrumb || matchingRoute.name })

            if (!matchingRoute.children) {
                return breadcrumbs
            }

            return this.getMatchingBreadcrumb(matchingRoute, pathSegment.split('/')[1], breadcrumbs)
        }

    },
  }
  </script>
  