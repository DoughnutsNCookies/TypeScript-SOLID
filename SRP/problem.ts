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
