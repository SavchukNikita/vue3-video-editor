import GraphicElement from "../GraphicElement";

export default class RectangeCtx extends GraphicElement {
  width = 100;

  height = 100;
  
  draw(): void {
    throw new Error("Method not implemented.");
  }
}