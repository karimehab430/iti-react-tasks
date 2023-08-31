class Polygon {
  constructor() {
    if (this.constructor == Polygon) {
      throw "Object of abstract class cannot be created.";
    }
  }
}
class Rectangle extends Polygon {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  toString() {
    var params = Object.keys(this).map((key) => `${key}: ${this[key]}`);
    console.log(`${this.constructor.name} \n${params}`);
    console.log(`Area: ${this.width * this.height} sq unit\n\n`);
  }
}

class Square extends Polygon {
  constructor(side) {
    super();
    this.side = side;
  }

  toString() {
    var params = Object.keys(this).map((key) => `${key}: ${this[key]}`);
    console.log(`${this.constructor.name} \n${params}`);
    console.log(`Area: ${this.side ** 2} sq unit\n\n`);
  }
}

class Circle extends Polygon {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  toString() {
    var params = Object.keys(this).map((key) => `${key}: ${this[key]}`);
    console.log(`${this.constructor.name} \n${params}`);
    console.log(`Area: ${Math.PI * this.radius ** 2} sq unit\n\n`);
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  toString() {
    var params = Object.keys(this).map((key) => `${key}: ${this[key]}`);
    console.log(`${this.constructor.name} \n${params}`);
    console.log(`Area: ${0.5 * this.base * this.height} sq unit`);
  }
}

var rectangle = new Rectangle(4, 5);
var square = new Square(3);
var circle = new Circle(2);
var triangle = new Triangle(4, 3);

rectangle.toString();
square.toString();
circle.toString();
triangle.toString();
