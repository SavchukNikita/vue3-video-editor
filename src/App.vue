<template>
  <div class="editor">
    <div class="editor__files">
      files
    </div>
    <div class="editor__preview">
      <PreviewScreen />
    </div>
    <div class="editor__assets">
      <AssetsList />
    </div>
    <div class="editor__timeline">
      timeline
    </div>
  </div>
</template>

<script setup lang="ts">
import PreviewScreen from '@/components/PreviewScreen.vue';
import AssetsList from './components/AssetsList.vue';

</script>


<style lang="scss" scoped>
  .editor {
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: 200px;

    &__files {
      background-color: red;
    }

    &__preview {
      background-color: green;
    }

    &__assets {
      background-color: aqua;
    }

    &__timeline {
      background-color: black;
      grid-column-start: 1;
      grid-column-end: 4;
    }
  }
</style>
