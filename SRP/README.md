# 🎯 Single Responsibility Principle (SRP)

The **Single Responsibility Principle (SRP)** focuses on the idea that a class should have only one reason to change. In other words, a class should have **only one responsibility or job**. This principle aims to keep classes focused, making them more maintainable and understandable.

## ❓ Problem

Imagine you are working on a file handling module for a project. The module is responsible for reading data from a file, processing it, and then saving the processed data back to a file. However, as the project evolves, new requirements emerge. The file handling module is expected to log every file operation for auditing purposes.

The initial implementation of the module might have methods for reading, processing, and saving data, all bundled together in a single class called `FileHandler` for example.

```typescript
class FileHandler {
  readAndProcess(filePath: string): string {
    // Logic for reading and processing data goes here.
    const rawData = "Raw data from file";
    const processedData = rawData.toUpperCase();
    return processedData;
  }

  saveToFile(filePath: string, data: string): void {
    // Logic for saving data to a file goes here.
    console.log(`Saving processed data to ${filePath}`);
  }

  logOperation(operation: string, filePath: string): void {
    // Logic for logging file operations goes here.
    console.log(`Operation: ${operation}, File: ${filePath}, Timestamp: ${new Date().toISOString()}`);
  }
}

// Example usage
const filePath = "example.txt";
const fileHandler = new FileHandler();

// Violation of SRP: A single class handling multiple responsibilities
const processedData = fileHandler.readAndProcess(filePath);
fileHandler.saveToFile(filePath, processedData);
fileHandler.logOperation("Save", filePath);
```

This approach creates a class with **multiple responsibilities** and **violates the SRP**.

## ✅ Solution

Applying the **Single Responsibility Principle (SRP)** involves breaking down the file handling module into **separate classes**, each with a **single responsibility**. In this case, we can have one class responsible for reading and processing data from a file and another class responsible for saving the processed data back to a file. Additionally, a logging class can be introduced to handle the auditing requirements.

## ✍🏻 Application

Let's create three classes: `FileReaderProcessor`, `FileSaver`, and `FileLogger`. The `FileReaderProcessor` class will handle reading and processing data, the `FileSaver` class will handle saving data, and the `FileLogger` class will handle logging file operations.

```typescript
/**
 * Class responsible for reading and processing data from a file.
 */
class FileReaderProcessor {
  readAndProcess(filePath: string): string {
    // Logic for reading and processing data goes here.
    const rawData = "Raw data from file";
    const processedData = rawData.toUpperCase();
    return processedData;
  }
}

/**
 * Class responsible for saving processed data to a file.
 */
class FileSaver {
  saveToFile(filePath: string, data: string): void {
    // Logic for saving data to a file goes here.
    console.log(`Saving processed data to ${filePath}`);
  }
}

/**
 * Class responsible for logging file operations.
 */
class FileLogger {
  logOperation(operation: string, filePath: string): void {
    // Logic for logging file operations goes here.
    console.log(`Operation: ${operation}, File: ${filePath}, Timestamp: ${new Date().toISOString()}`);
  }
}
```

Now, the **responsibilities are clearly separated**, adhering to the **Single Responsibility Principle**. We can use these classes together to achieve the desired functionality.

```typescript
// Example usage
const filePath = "example.txt";

const readerProcessor = new FileReaderProcessor();
const saver = new FileSaver();
const logger = new FileLogger();

const processedData = readerProcessor.readAndProcess(filePath);
saver.saveToFile(filePath, processedData);
logger.logOperation("Save", filePath);
```

## ☯️ Pros and Cons

### Pros

- **Maintainability**: Code is easier to maintain as each class has a single responsibility.

- **Reusability**: Classes with a single responsibility are more reusable in different contexts.

- **Testability**: Each class can be tested independently, leading to more robust testing.

### Cons

- **Increased Number of Classes**: Applying SRP might result in more classes, which could be perceived as a disadvantage in very simple scenarios.

- **Initial Design Effort**: Breaking down responsibilities and creating separate classes requires careful design and planning.
