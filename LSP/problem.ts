class Rectangle {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  // Calculate the area of the rectangle
  calculateArea(): number {
    return this.width * this.height;
  }

  // Draw the rectangle
  draw(): void {
    console.log(`Drawing a rectangle with width ${this.width} and height ${this.height}`);
  }
}

class Square extends Rectangle {
  constructor(sideLength: number) {
    super(sideLength, sideLength);
  }
}

function printShapeInfo(rectangle: Rectangle): void {
  console.log(`Area: ${rectangle.calculateArea()}`);
  rectangle.draw();
}

const rectangle = new Rectangle(5, 10);
printShapeInfo(rectangle);
const square = new Square(5);
printShapeInfo(square);
