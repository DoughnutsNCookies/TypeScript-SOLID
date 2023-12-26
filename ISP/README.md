# 🔍 Interface Segregation Principle (ISP)

The **Interface Segregation Principle (ISP)** is a SOLID design principle that emphasizes **creating specific interfaces** for clients **instead of having a one-size-fits-all interface**. It suggests that a class should not be forced to implement interfaces it does not use. By segregating interfaces, we prevent clients from being **burdened with unnecessary methods**, promoting a more modular and maintainable design.

## ❓ Problem

Consider a scenario where you are designing a system for electronic devices. You start with an `ElectronicDevice` interface that has methods for both printing and scanning.

```typescript
interface ElectronicDevice {
  print(): void;
  scan(): void;
}
```

Now, you create a class `AllInOnePrinter` that implements this interface because it is capable of both printing and scanning.

```typescript
class AllInOnePrinter implements ElectronicDevice {
  print(): void {
    console.log("Printing...");
  }

  scan(): void {
    console.log("Scanning...");
  }
}
```

However, you also have a simple `FaxMachine` class that can only send faxes, and it does not need the scanning capability.

```typescript
class FaxMachine implements ElectronicDevice {
  print(): void {
    console.log("Printing fax...");
  }

  scan(): void {
    // Unnecessary method for a fax machine
    console.log("This method should not be here!");
  }
}
```

In this case, the `FaxMachine` class is forced to implement a method it doesn't need, violating the Interface Segregation Principle.

## ✅ Solution

To adhere to the Interface Segregation Principle, create specific interfaces for different functionalities. In this case, we can have separate interfaces for printing and scanning, allowing classes to implement only what they need.

## ✍🏻 Application

Let's introduce two interfaces: `Printable` and `Scannable`. The `ElectronicDevice` interface can then extend these specific interfaces.

```typescript
// Interface for printable devices
interface Printable {
  print(): void;
}

// Interface for scannable devices
interface Scannable {
  scan(): void;
}

// Interface for electronic devices combining printing and scanning
interface ElectronicDevice extends Printable, Scannable {}

// All-in-one printer implementing the ElectronicDevice interface
class AllInOnePrinter implements ElectronicDevice {
  print(): void {
    console.log("Printing...");
  }

  scan(): void {
    console.log("Scanning...");
  }
}

// Fax machine implementing only the Printable interface
class FaxMachine implements Printable {
  print(): void {
    console.log("Printing fax...");
  }
}
```

Now, each class can implement the specific interfaces it needs, adhering to the Interface Segregation Principle.

## ☯️ Pros and Cons

### Pros

- **Modularity**: Interfaces are more modular, allowing clients to implement only the methods they need.

- **Avoiding Unnecessary Dependencies**: Classes are not forced to depend on methods they do not use, reducing unnecessary dependencies.

### Cons

- **Interface Proliferation**: Introducing specific interfaces may lead to a larger number of interfaces, which could be seen as a downside.

- **Design Overhead**: Careful consideration is needed to identify and create cohesive interfaces for different functionalities.
