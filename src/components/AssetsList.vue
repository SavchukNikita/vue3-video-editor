<template>
  <ul class="assets-list">
    <li v-for="group in assetsListItems">
      <ul>
        <details>
          <summary>
            {{ group.name }}
          </summary>
          <li v-for="asset in group.items">
            <button @click="addAsset(asset.getCtx)">
              {{ asset.name }}
            </button>
          </li>
        </details>
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { AssetsListItemsGroup, GraphicElement } from '@/core';
import { RectangeCtx, CircleCtx } from '@/core';
import { emitter } from '@/utils';

  const assetsListItems: AssetsListItemsGroup[] = [
    {
      name: 'Shapes',
      items: [
        {
          name: 'Rectange',
          getCtx: () =>  new RectangeCtx(),
        },
        {
          name: 'Circle',
          getCtx: () => new CircleCtx(),
        }
      ]
    }
  ];

  const addAsset = (getCtx: () => GraphicElement) => {
    emitter.emit('addGraphicElement', getCtx());
  }

  
</script>

<style lang="scss">
  .assets-list {
    ul {
      margin: 0;
      padding: 0;
    }

    li {
      list-style: none;
    }
  }
</style>