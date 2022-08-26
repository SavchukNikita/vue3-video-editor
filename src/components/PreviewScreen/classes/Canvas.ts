export default class Canvas {
  ctx: CanvasRenderingContext2D | null = null;

  init(el: HTMLCanvasElement) {
    this.ctx = el.getContext('2d')!;
  }

  draw() {
    if(!this.ctx) return;

    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(10, 10, 100, 100);
  }
}