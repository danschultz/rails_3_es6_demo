// tests circular references with the app bundle
import * as math from "../app/math";

export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  ageDifference(other) {
    return math.subtract(this.age, other.age);
  }
}
