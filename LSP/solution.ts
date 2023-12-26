// Interface for geometric shapes
interface Shape {
  calculateArea(): number;
  draw(): void;
}

// Rectangle class implementing the Shape interface
class Rectangle implements Shape {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  draw(): void {
    console.log(`Drawing a rectangle with width ${this.width} and height ${this.height}`);
  }
}

// Square class implementing the Shape interface
class Square implements Shape {
  private sideLength: number;

  constructor(sideLength: number) {
    this.sideLength = sideLength;
  }

  calculateArea(): number {
    return this.sideLength * this.sideLength;
  }

  draw(): void {
    console.log(`Drawing a square with side length ${this.sideLength}`);
  }
}

// Function to print shape information
function printShapeInfo(shape: Shape): void {
  console.log(`Area: ${shape.calculateArea()}`);
  shape.draw();
}

// Example usage with Square
const rectangle = new Rectangle(5, 10);
printShapeInfo(rectangle);
const square = new Square(5);
printShapeInfo(square);
