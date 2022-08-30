<template>
  <svg>
    <template v-for="el, idx in graphicElements" :key="`graphic-el__${idx}`">
      <component :is="el"/>
    </template>
  </svg>
</template>

<script setup lang="ts">import { reactive, computed } from 'vue';
import { GraphicElementsFabric } from '../../classes';
import { GraphicElement } from '../GraphicElements';
import { CanvasCtx } from './classes';

const ctx = reactive(new CanvasCtx());

const graphicElements = computed(() => {
  return ctx.elements.map((el) => GraphicElementsFabric.create(el as GraphicElement));
})
</script>