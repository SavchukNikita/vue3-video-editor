import { GraphicElement } from "../classes"

export type Timestamp = {
  startAt: number,
  endAt: number,
}

export type Position = {
  x: number,
  y: number,
}

export interface AssetsListItem {
  name: string,
  getCtx: () => GraphicElement,
}

export interface AssetsListItemsGroup {
  name: string,
  items: AssetsListItem[],
}

export * from './events';