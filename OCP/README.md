# 🔒 Open/Closed Principle (OCP)

The **Open/Closed Principle (OCP)** is a SOLID design principle that states that a class should be **open for extension but closed for modification**. In other words, the behavior of a module can be extended without modifying its source code. This principle encourages developers to design software components that can be easily extended with new functionality without altering existing code.

## ❓ Problem

Imagine you are developing a geometric shapes module that initially supports rectangles and circles. Each shape has methods to calculate its area and perimeter. However, as the project progresses, new shapes like triangles and ellipses need to be added.

The initial implementation might involve a single class (`ShapeCalculator`) with methods for calculating the area and perimeter of rectangles and circles. This design makes it **challenging to add new shapes without modifying the existing class**, violating the Open/Closed Principle.

```typescript
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
}
```

Now, with the new requirement for adding a triangle, a common approach might involve **modifying the existing class**:

```typescript
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
```

This modification **violates the OCP**, as it involves changing the existing `ShapeCalculator` class **instead of extending it**.

## ✅ Solution

Applying the **Open/Closed Principle (OCP)** involves designing the system to be **extensible**. In this case, we can create an abstract base class `Shape` with methods for calculating the area and perimeter. Concrete subclasses for each shape (e.g., `Rectangle`, `Circle`, `Triangle`) can then extend the base class, **providing specific implementations for the calculations**.

## ✍🏻 Application

Let's create an abstract class `Shape` with methods for calculating the area and perimeter. We'll then create concrete subclasses for rectangles and circles. Later, we can easily add new shapes without modifying the existing code.

```typescript
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
```

Now, adding a new shape like a triangle is as simple as creating new subclasses of `Shape` without modifying the existing code.

```typescript
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
```

We can then call the methods on the concrete classes to calculate the area and perimeter of each shape.

```typescript
// Example usage
const circle = new Circle(5);
const rectangle = new Rectangle(6, 8);
const triangle = new Triangle(3, 4);

console.log(`Circle Area: ${circle.calculateArea()}`);
console.log(`Rectangle Perimeter: ${rectangle.calculatePerimeter()}`);
console.log(`Triangle Area: ${triangle.calculateArea()}`);
```

## ☯️ Pros and Cons

### Pros

- **Extension Without Modification**: New functionality can be added without altering existing code, promoting a modular and extensible design.

- **Reduced Risk**: Since existing code remains untouched, there is a reduced risk of introducing bugs or unintended side effects.

### Cons

- **Abstraction Overhead**: Introducing abstractions and interfaces may add some level of complexity to the design.

- **Initial Design Effort**: Designing classes to be open for extension requires careful planning and consideration of future requirements. 
