/**
 * Interface for shape calculations.
 */
abstract class Shape {
  abstract calculateArea(): number;
  abstract calculatePerimeter(): number;
}

/**
 * Concrete class representing a circle.
 */
class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
		super();
    this.radius = radius;
  }

	calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

/**
 * Concrete class representing a rectangle.
 */
class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
		super();
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

/**
 * Concrete class representing a triangle.
 */
class Triangle extends Shape {
  private base: number;
  private height: number;

  constructor(base: number, height: number) {
		super();
    this.base = base;
    this.height = height;
  }

  calculateArea(): number {
    return 0.5 * this.base * this.height;
  }

  calculatePerimeter(): number {
    return this.base + this.height + Math.sqrt(this.base ** 2 + this.height ** 2);
  }
}

// Example usage
const circle = new Circle(5);
const rectangle = new Rectangle(6, 8);
const triangle = new Triangle(3, 4);

console.log(`Circle Area: ${circle.calculateArea()}`);
console.log(`Rectangle Perimeter: ${rectangle.calculatePerimeter()}`);
console.log(`Triangle Area: ${triangle.calculateArea()}`);
