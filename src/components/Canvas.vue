<template>
  <svg>
    <template v-for="el, idx in graphicElements" :key="`graphic-el__${idx}`">
      <component :is="el"/>
    </template>
  </svg>
</template>

<script setup lang="ts">
import { CanvasCtx, GraphicElementsFabric, GraphicElement } from '@/core';
import { emitter } from '@/utils';
import { reactive, computed, onMounted } from 'vue';

const ctx = reactive(new CanvasCtx());

const graphicElements = computed(() => {
  return ctx.assets.map((el) => GraphicElementsFabric.create(el as GraphicElement));
})

onMounted(() => {
  emitter.on('addGraphicElement', (assetCtx) => {
    ctx.addAsset(assetCtx);
  })
})
</script>