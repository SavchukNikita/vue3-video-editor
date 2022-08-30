import { GraphicElement } from "./classes";
import { Position, Timestamp } from "./types";

export interface IGraphicElement {
  timestamp: Timestamp,
  position: Position,
  width: number,
  height: number,
  color: string,
  isMoved: boolean,
  rootEl: SVGAElement | null,
  offset: Position,
  draw: () => void,
  setRootEl: (el: SVGAElement) => void,
  moveStart: (event: MouseEvent) => void,
  move: (event: MouseEvent) => void,
  moveEnd: () => void,
}