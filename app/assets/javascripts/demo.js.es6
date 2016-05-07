console.log("hi");

export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }
}

export class User extends Person {
  constructor(email, name, age) {
    super(name, age);
    this.email = email;
  }
}
