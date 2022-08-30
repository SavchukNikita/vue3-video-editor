import CircleVue from "@/components/Assets/Shapes/Circle.vue";
import RectangeVue from "@/components/Assets/Shapes/Rectange.vue";
import { GraphicElement, RectangeCtx } from "./Assets";
import CircleCtx from "./Assets/Shapes/CircleCtx";

export default class GraphicElementsFabric {
  static create(ctx: GraphicElement) {
    if (ctx instanceof RectangeCtx) return RectangeVue;
    if (ctx instanceof CircleCtx) return CircleVue;
  }
}