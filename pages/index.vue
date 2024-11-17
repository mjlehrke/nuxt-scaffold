<script lang="ts" setup>
defineRouteRules({
  prerender: true,
});

useHead({
  title: 'Home page',
});

useSeoMeta({
  ogTitle: 'Home page',
});

const { increase, counter } = useCounter();
</script>

<template>
  <div>
    <Hello />
    <p>(^^^ that was a component ^^^)</p>
    <div class="nav">
      <NuxtLink to="/about">About Page</NuxtLink>
      <NuxtLink to="/docs/thing">Content Thing</NuxtLink>
    </div>
    <div class="composable">
      Composable:
      <button @click="increase">
        {{ counter }}
      </button>
    </div>
    <div class="formkit">
      <FormKit type="select" :options="['one', 'two', 'three']" label="FormKit is here too" />
    </div>
    <p>In the &lt;head&gt; tags are some SEO things too!</p>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
}

.composable {
  margin-bottom: 50px;
}

.formkit {
  background: #000;
  border-radius: 5px;
  margin-bottom: 50px;
  padding: 5rem;
}
</style>
