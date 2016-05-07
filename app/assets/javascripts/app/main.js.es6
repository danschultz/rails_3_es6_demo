import * as geom from "./geom"

export function main() {
  let pointA = new geom.Point(1, 2);
  let pointB = new geom.Point(2, 3);
  let pointC = pointA.add(pointB);
  console.log(`A + B = ${pointC}`);
}
