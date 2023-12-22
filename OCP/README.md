# 🔒 Open/Closed Principle (OCP)

The **Open/Closed Principle (OCP)** is a SOLID design principle that states that a class should be **open for extension but closed for modification**. In other words, the behavior of a module can be extended without modifying its source code. This principle encourages developers to design software components that can be easily extended with new functionality without altering existing code.

## ❓ Problem

Consider a scenario where you have developed a `Shape` class hierarchy to represent various geometric shapes, such as circles and rectangles. Initially, you provide a method `calculateArea` in the base `Shape` class to compute the area of a shape.

Now, a new requirement arises: you need to support the calculation of perimeters for each shape. The conventional approach might involve modifying the existing `Shape` class and **adding a new method**, violating the OCP. Let's consider a scenario where the `Shape` class originally only had an `calculateArea` method:

```typescript
class Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
```

Now, with the new requirement for calculating perimeters, a common approach might involve **modifying the existing class**:

```typescript
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
```

This modification **violates the OCP**, as it involves changing the existing `Shape` class **instead of extending it**.

## ✅ Solution

Applying the **Open/Closed Principle (OCP)** involves extending the existing functionality without modifying the existing code. In this case, we can introduce an abstraction (`ShapeCalculator`) that defines methods for both area and perimeter calculations. Concrete implementations for area and perimeter calculations can be added without modifying the `Shape` class.

## ✍🏻 Application

Let's create an `ShapeCalculator` interface with methods for both area and perimeter calculations. Then, we'll create concrete implementations for both calculations: `AreaCalculator` and `PerimeterCalculator`. The `Shape` class will be modified to accept a calculator during construction.

```typescript
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
class Shape {
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
class Circle extends Shape {
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
class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number, calculator: ShapeCalculator) {
    super(calculator);
    this.width = width;
    this.height = height;
  }

  // Additional methods and properties specific to rectangles can be added here.
}
```

Now, the `Shape` class is **open for extension** by allowing new calculators to be added **without modifying the existing code**.

## ☯️ Pros and Cons

### Pros

- **Extension Without Modification**: New functionality can be added without altering existing code, promoting a modular and extensible design.

- **Reduced Risk**: Since existing code remains untouched, there is a reduced risk of introducing bugs or unintended side effects.

### Cons

- **Abstraction Overhead**: Introducing abstractions and interfaces may add some level of complexity to the design.

- **Initial Design Effort**: Designing classes to be open for extension requires careful planning and consideration of future requirements. 
