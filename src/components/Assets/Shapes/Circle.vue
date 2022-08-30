<template>
  <circle
    ref="el"
    class="el-circle"
    :cx="ctx.position.x"
    :cy="ctx.position.y"
    :r="ctx.radius"
    :fill="ctx.color"
    @mousedown="ctx.moveStart"
    @mousemove="ctx.move"
    @mouseup="ctx.moveEnd"
    @mouseleave="ctx.moveEnd"
  />
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { RectangeCtx } from '@/core';
import CircleCtx from '@/core/classes/assets/shapes/CircleCtx';

const el = ref<SVGAElement>();

const ctx = reactive(new CircleCtx());

onMounted(() => {
  if (!el.value) return;

  ctx.setRootEl(el.value);
});

</script>

<style lang="scss">
</style>