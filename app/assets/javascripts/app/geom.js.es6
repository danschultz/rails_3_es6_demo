import * as math from "./math";

export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(other) {
    return new Point(math.add(this.x, other.x), math.add(this.y, other.y));
  }

  subtract(other) {
    return new Point(math.subtract(this.x, other.x), math.subtract(this.y, other.y));
  }

  toString() {
    return `{x: ${this.x}, y: ${this.y}}`
  }
}
