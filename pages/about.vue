<script lang="ts" setup>
defineRouteRules({
  prerender: true,
  robots: false,
});

useHead({
  title: 'About page',
});

useSeoMeta({
  ogTitle: 'About page',
});
</script>

<template>
  <div>
    <h1>The about page.</h1>
    <div><NuxtLink to="/">Home Page</NuxtLink></div>
    <div><NuxtLink to="/docs/thing">Content Thing</NuxtLink></div>
    <br />
  </div>
</template>
