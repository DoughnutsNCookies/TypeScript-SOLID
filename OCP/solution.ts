/**
 * Interface for shape calculations.
 */
interface ShapeCalculator {
  calculateArea(): number;
  calculatePerimeter(): number;
}

/**
 * Concrete implementation for area calculation.
 */
class AreaCalculator implements ShapeCalculator {
  calculateArea(): number {
    throw new Error("Method not implemented.");
  }

  calculatePerimeter(): number {
    throw new Error("Method not implemented.");
  }
}

/**
 * Concrete implementation for perimeter calculation.
 */
class PerimeterCalculator implements ShapeCalculator {
  calculateArea(): number {
    throw new Error("Method not implemented.");
  }

  calculatePerimeter(): number {
    throw new Error("Method not implemented.");
  }
}

/**
 * Base class representing various geometric shapes.
 */
class MyShape {
  private calculator: ShapeCalculator;

  constructor(calculator: ShapeCalculator) {
    this.calculator = calculator;
  }

  calculateArea(): number {
    return this.calculator.calculateArea();
  }

  calculatePerimeter(): number {
    return this.calculator.calculatePerimeter();
  }
}

/**
 * Concrete class representing a circle.
 */
class Circle extends MyShape {
  private radius: number;

  constructor(radius: number, calculator: ShapeCalculator) {
    super(calculator);
    this.radius = radius;
  }

  // Additional methods and properties specific to circles can be added here.
}

/**
 * Concrete class representing a rectangle.
 */
class Rectangle extends MyShape {
  private width: number;
  private height: number;

  constructor(width: number, height: number, calculator: ShapeCalculator) {
    super(calculator);
    this.width = width;
    this.height = height;
  }

  // Additional methods and properties specific to rectangles can be added here.
}
