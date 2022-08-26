<template>
  <div class="editor">
    <div class="editor__files">
      files
    </div>
    <div class="editor__preview">
      <PreviewScreen />
    </div>
    <div class="editor__assets">
      assets
    </div>
    <div class="editor__timeline">
      timeline
    </div>
  </div>
</template>

<script setup lang="ts">
import PreviewScreen from './components/PreviewScreen';
</script>


<style lang="scss" scoped>
  .editor {
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-areas:  "a b b b b b b c"
                          "a b b b b b b c"
                          "a b b b b b b c"
                          "a b b b b b b c"
                          "d d d d d d d d"
                          "d d d d d d d d";

    &__files {
      background-color: red;
      grid-area: a;
    }

    &__preview {
      background-color: green;
      grid-area: b;
    }

    &__assets {
      background-color: aqua;
      grid-area: c;
    }

    &__timeline {
      background-color: black;
      grid-area: d;
    }
  }
</style>
