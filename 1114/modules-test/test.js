class Person {
  constructor() {
    this.weight = "around 100kg";
    this.height = "around 170cm";
  }
}
class Men extends Person {
  constructor() {
    super();
    this.gender = "Male";
  }
}

let peter = new Men;
console.log(peter.weight);
