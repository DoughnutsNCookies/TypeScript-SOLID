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
