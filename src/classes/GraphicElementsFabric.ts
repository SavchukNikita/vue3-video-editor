import { Rectange,  GraphicElement, RectangeCtx  } from '../components/GraphicElements';

export default class GraphicElementsFabric {
  static create(ctx: GraphicElement) {
    if (ctx instanceof RectangeCtx) return Rectange;
  }
}