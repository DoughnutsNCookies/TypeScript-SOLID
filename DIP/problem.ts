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
