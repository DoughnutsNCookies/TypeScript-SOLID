# 🔒 Liskov Substitution Principle (LSP)

The **Liskov Substitution Principle (LSP)** is a SOLID design principle that states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. This principle ensures that the behavior specified for a base class is upheld by its derived classes, promoting a consistent and predictable usage of objects.

## ❓ Problem

Imagine you are developing a system to model geometric shapes, and you start with a base class `Rectangle` representing rectangles. This class has methods to calculate the area and draw the shape.

```typescript
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

```

Now, you decide to extend this system by introducing a derived class `Square` for square shapes. Since a square is a special case of a rectangle where the width and height are the same, you decide to make `Square` extend `Rectangle`.

```typescript
class Square extends Rectangle {
  constructor(sideLength: number) {
    super(sideLength, sideLength);
  }
}
```

The issue arises when you try to use the `Square` class in a context where a `Rectangle` is expected. For example:

```typescript
function printRectangleInfo(rectangle: Rectangle): void {
  console.log(`Area: ${rectangle.calculateArea()}`);
  rectangle.draw();
}

const square = new Square(5);
printRectangleInfo(square);
```

While this seems reasonable at first, it violates the Liskov Substitution Principle. The `Square` class alters the behavior of the `Rectangle` class by enforcing equal width and height, potentially leading to unexpected results in a context where a general rectangle is expected.

## ✅ Solution

To adhere to the Liskov Substitution Principle, it's crucial to ensure that a derived class does not alter the behavior of the base class. In this case, a square is not a true subtype of a rectangle because it imposes additional constraints on the dimensions.

A better design approach would be to create a common interface or abstract class for both `Rectangle` and `Square` that accurately represents the shared behavior without violating the principles.

## ✍🏻 Application

Let's create an interface `Shape` that defines the common behavior for both rectangles and squares. Both `Rectangle` and `Square` can implement this interface, ensuring that they adhere to the same contract.

```typescript
interface Shape {
  calculateArea(): number;
  draw(): void;
}

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
```

Now, the `printRectangleInfo` function can be updated to accept any object that implements the `Shape` interface:

```typescript
function printShapeInfo(shape: Shape): void {
  console.log(`Area: ${shape.calculateArea()}`);
  shape.draw();
}

const square = new Square(5);
printShapeInfo(square);
```

This modification ensures that both rectangles and squares can be used interchangeably without violating the Liskov Substitution Principle.

## ☯️ Pros and Cons

### Pros

- **Consistent Behavior**: Adhering to LSP ensures that derived classes maintain the same behavior as the base class, promoting a consistent usage pattern.

- **Interchangeability**: Objects of the base class and its derived classes can be used interchangeably, promoting polymorphism.

### Cons

- **Design Overhead**: Designing classes to adhere to LSP may require careful consideration of the relationships between base and derived classes.

- **Interface Overhead**: Introducing interfaces or abstract classes may add some level of complexity to the design.
