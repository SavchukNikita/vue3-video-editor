import { Timestamp, Position } from "@/core/types";
import getMousePosition from "@/utils/getMousePosition";

export default abstract class GraphicElement {
  timestamp: Timestamp = {
    startAt: 0,
    endAt: 0,
  };

  position: Position = {
    x: Math.floor(Math.random() * 199 + 1),
    y: 10,
  };

  color = "#FFFFFF";

  isMoved = false;

  rootEl: SVGAElement | null = null;

  private offset: Position = {
    x: 0,
    y: 0,
  }

  abstract draw() : void;

  setRootEl(el: SVGAElement) {
    this.rootEl = el;
  }

  moveStart(event: MouseEvent) {
    if (!this.rootEl) return;

    this.isMoved = true;
    this.offset = getMousePosition(event.clientX, event.clientY, this.rootEl);
    this.offset.x -= this.position.x;
    this.offset.y -= this.position.y;
  }

  move(event: MouseEvent) {
    if (!this.isMoved || !this.rootEl) return;
    
    event.preventDefault();

    const coords = getMousePosition(event.clientX, event.clientY, this.rootEl);
    this.position.x = coords.x - this.offset.x;
    this.position.y = coords.y - this.offset.y;
  }

  moveEnd() {
    this.isMoved = false;
  }
}