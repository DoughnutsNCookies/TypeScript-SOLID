# 🤝 Dependency Inversion Principle (DIP)

The **Dependency Inversion Principle (DIP)** is a SOLID design principle that encourages high-level modules to **depend on abstractions rather than concrete implementations**. It promotes the inversion of the traditional dependency flow, where high-level modules depend on low-level modules, by introducing abstractions that both high and low-level modules depend on. This principle contributes to **flexibility and ease of maintenance** in a system.

## ❓ Problem

Imagine you are developing a logging system where a `Logger` class logs messages to different destinations, such as the console and a file. Initially, the system is designed with a direct dependency on concrete implementations.

```typescript
class ConsoleLogger {
  log(message: string): void {
    console.log(`Console Log: ${message}`);
  }
}

class FileLogger {
  log(message: string): void {
    // Log to a file implementation
    console.log(`File Log: ${message}`);
  }
}

class Logger {
  private consoleLogger: ConsoleLogger;
  private fileLogger: FileLogger;

  constructor() {
    this.consoleLogger = new ConsoleLogger();
    this.fileLogger = new FileLogger();
  }

  logToConsole(message: string): void {
    this.consoleLogger.log(message);
  }

  logToFile(message: string): void {
    this.fileLogger.log(message);
  }
}
```

In this design, the `Logger` class has direct dependencies on `ConsoleLogger` and `FileLogger`, violating the Dependency Inversion Principle.

## ✅ Solution

To adhere to the Dependency Inversion Principle, introduce an interface (abstraction) that both `ConsoleLogger` and `FileLogger` implement. The `Logger` class should then depend on this interface rather than on concrete implementations.

## ✍🏻 Application

Let's create an interface `Loggable` representing the abstraction for logging.

```typescript
// Interface for loggable objects
interface Loggable {
  log(message: string): void;
}

// ConsoleLogger implementing the Loggable interface
class ConsoleLogger implements Loggable {
  log(message: string): void {
    console.log(`Console Log: ${message}`);
  }
}

// FileLogger implementing the Loggable interface
class FileLogger implements Loggable {
  log(message: string): void {
    // Log to a file implementation
    console.log(`File Log: ${message}`);
  }
}

// Logger depending on the Loggable interface
class Logger {
  private logDestination: Loggable;

  constructor(logDestination: Loggable) {
    this.logDestination = logDestination;
  }

  log(message: string): void {
    this.logDestination.log(message);
  }
}
```

Now, the `Logger` class depends on the `Loggable` interface rather than concrete implementations. This allows for greater flexibility and easier maintenance.

## ☯️ Pros and Cons

### Pros

- **Flexibility**: By depending on abstractions, the system becomes more flexible and adaptable to changes.

- **Easier Maintenance**: High-level modules are decoupled from low-level modules, making the system easier to maintain.

### Cons

- **Increased Abstraction**: Introducing interfaces may add some level of abstraction, potentially increasing the complexity of the system.

- **Initial Design Effort**: Designing abstractions and interfaces requires careful consideration of the relationships between components.
