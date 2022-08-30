<template>
  <rect
    ref="el"
    class="el-rectange"
    :x="ctx.position.x"
    :y="ctx.position.y"
    :width="ctx.width"
    :height="ctx.height"
    :fill="ctx.color"
    @mousedown="ctx.moveStart"
    @mousemove="ctx.move"
    @mouseup="ctx.moveEnd"
    @mouseleave="ctx.moveEnd"
  />
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { RectangeCtx } from '../classes';

const el = ref<SVGAElement>();

const ctx = reactive(new RectangeCtx());

onMounted(() => {
  if (!el.value) return;

  ctx.setRootEl(el.value);
});

</script>

<style lang="scss">
</style>
