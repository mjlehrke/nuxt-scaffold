<template>
  <div class="layout">
    <slot></slot>
    <p class="note">
      (This page is using the default layout)
    </p>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  margin: 0 auto;
  padding-top: 50px;
  width: 80%;
}

.note {
  margin-top: 50px;
}
</style>
