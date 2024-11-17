<script lang="ts" setup>
const appConfig = useAppConfig();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${appConfig.appName}` : `${appConfig.appName}`;
  },
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@use 'sass:meta';
@include meta.load-css('~/assets/styles/app');
</style>
