//1. Encapsulation
//Bundling the data {properties} and methods {functions} that operate on the data
//into single unit called object

function Car(name, model) {
  this.name = name;
  this.model = model;
  this.details = function () {
    return `${this.name} ${this.model}`;
  };
}

const myCar = new Car("ferrai", "f50");
//we dont know how getDetails work internally(abstraction example)
console.log(myCar.details());

//2. Hiding complex implementation details and exposing only the necessary parts

//3. Inheritance
// A mechanism where one class can inherit properties from another class.
class Carr {
  constructor(brand) {
    this.brand = brand;
  }
  getBrand() {
    return this.brand;
  }
}

class Vehicle extends Carr {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  getDetails() {
    return `${this.getBrand()} ${this.model}`;
  }
}

const carDetails = new Vehicle("toyota", "corolla");
console.log(carDetails.getDetails());

//Polymorphism - ability to call same method with different objects and each of them respond in their own way.

class Shape {
  draw() {
    console.log("Draw a shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Draw a circle");
  }
}
class Square extends Shape {
  draw() {
    console.log("Draw a square");
  }
}

const shapes = [new Shape(), new Circle(), new Square()];
shapes.forEach((shape) => shape.draw());
