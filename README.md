# SOLID Principles in TypeScript

This repository contains the implementation of the design patterns using **TypeScript**.

**SOLID** is an acronym that represents a set of five design principles for writing maintainable and scalable software. These principles were introduced by *Robert C. Martin* and have become a fundamental guide for **object-oriented design**.

- ☝️ **`S`ingle Responsibility Principle (SRP)**
- 🔒 **`O`pen/Closed Principle (OCP)**
- 🔀 **`L`iskov Substitution Principle (LSP)**
- 🧩 **`I`nterface Segregation Principle (ISP)**
- 🔄 **`D`ependency Inversion Principle (DIP)**

## 📊 Classification of SOLID Principles

### ☝️ [Single Responsibility Principle (SRP)](./SRP)

The SRP states that a class should have only one reason to change, meaning it should have only one responsibility or job. This principle encourages the creation of small, focused classes.

### 🔒 [Open/Closed Principle (OCP)](./OCP)

The OCP dictates that a class should be open for extension but closed for modification. This means that the behavior of a module can be extended without modifying its source code.

### 🔀 [Liskov Substitution Principle (LSP)](./LSP)

The LSP states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. Subtypes must be substitutable for their base types.

### 🧩 [Interface Segregation Principle (ISP)](./ISP)

The ISP suggests that a class should not be forced to implement interfaces it does not use. Instead of a large, monolithic interface, clients should not be forced to depend on interfaces they do not use.

### 🔄 [Dependency Inversion Principle (DIP)](./DIP)

The DIP states that high-level modules should not depend on low-level modules; both should depend on abstractions. It promotes the use of interfaces or abstract classes to decouple higher and lower-level components.

## 🙌 Benefits of SOLID Principles

1. 🛠️ **Improved Maintainability**: Code becomes more modular and less prone to bugs. This makes it easier to understand, maintain, and modify.

2. 🤸‍♀️ **Enhanced Flexibility**: Promote loose coupling between components. This makes it easier to replace or modify one component without affecting others, enhancing the flexibility of your codebase.

3. 🔍 **Increased Readability**: Cleaner, more organized code. This, in turn, improves code readability, making it easier for developers to understand and work with the codebase.

4. 📈 **Scalability**: Encourage the creation of code that is more scalable. This means that as your project grows, it's easier to extend and add new features without causing a cascade of changes throughout the system.

5. 🧪 **Easier Testing**: Promote the creation of code that is more testable. Components are often more independent, making it simpler to write unit tests and ensure the correctness of individual modules.

6. ♻️ **Reusable Components**: Create components that are more modular and can be easily reused in different parts of your application or even in other projects.

7. 🤝🏻 **Better Collaboration**: Easier for developers to collaborate. Code that follows these principles is generally more understandable and less error-prone, reducing conflicts between team members.

8. 🌺 **Reduction of Code Smells**: Eliminate common code smells like duplicated code, tight coupling, and fragile base class problems. This leads to cleaner, more maintainable code.

9. 🔄 **Adaptability to Change**: Better equipped to adapt. The modular nature of the code allows for easier modification and addition of features without causing widespread impact.

10. 🐛 **Simplified Debugging**: Easier to debug. With well-defined and isolated components, identifying and fixing issues becomes a more straightforward process.
