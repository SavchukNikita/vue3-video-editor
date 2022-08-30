<template>
  <div class="preview-screen">
    <Canvas class="preview-screen__canvas"/>
  </div>
</template>

<script lang="ts" setup>
import Canvas from './Canvas.vue';

</script>

<style lang="scss" scoped>
  .preview-screen {
    width: 100%;
    height: 100%;
    &__canvas {
      width: 100%;
      height: 100%;
    }
  }
</style>