class ShapeCalculator {
  calculateRectangleArea(width: number, height: number): number {
    return width * height;
  }

  calculateRectanglePerimeter(width: number, height: number): number {
    return 2 * (width + height);
  }

  calculateCircleArea(radius: number): number {
    return Math.PI * radius ** 2;
  }

  calculateCirclePerimeter(radius: number): number {
    return 2 * Math.PI * radius;
  }

  // Violation: Adding a new shape requires modifying the existing class.
  calculateTriangleArea(base: number, height: number): number {
    return 0.5 * base * height;
  }

  // Violation: Adding a new shape requires modifying the existing class.
  calculateTrianglePerimeter(side1: number, side2: number, side3: number): number {
    return side1 + side2 + side3;
  }
}