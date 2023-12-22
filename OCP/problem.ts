// Problematic code violating OCP
class Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
