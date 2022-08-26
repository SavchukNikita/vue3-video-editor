<template>
  <div class="preview-screen">
    <canvas ref="canvas">

    </canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import Canvas from './classes/Canvas';

const canvas = ref<HTMLCanvasElement>();
const ctx = reactive(new Canvas());

onMounted(() => {
  ctx.init(canvas.value!);
  ctx.draw();
})
  
</script>

<style>
</style>