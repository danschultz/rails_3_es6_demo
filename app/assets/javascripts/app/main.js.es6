import * as geom from "./geom";
import Person from "../models/person";
import {View as PersonView} from "./views/person";
import {ReactDOM} from "react";

export function main(container) {
  let pointA = new geom.Point(1, 2);
  let pointB = new geom.Point(2, 3);
  let pointC = pointA.add(pointB);
  console.log(`A + B = ${pointC}`);

  let person = new Person("Jane Doe", 25);

  ReactDOM.render(<PersonView person={person}/>, container);
}
