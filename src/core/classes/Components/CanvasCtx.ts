import { CircleCtx, GraphicElement, RectangeCtx } from "../Assets";

export default class CanvasCtx {
  assets: GraphicElement[] = [ new RectangeCtx(), new CircleCtx() ];

  addAsset(ctx: GraphicElement) {
    this.assets.push(ctx);
  }
}