interface ElectronicDevice {
  print(): void;
  scan(): void;
}

class AllInOnePrinter implements ElectronicDevice {
  print(): void {
    console.log("Printing...");
  }

  scan(): void {
    console.log("Scanning...");
  }
}

class FaxMachine implements ElectronicDevice {
  print(): void {
    console.log("Printing fax...");
  }

  scan(): void {
    // Unnecessary method for a fax machine
    console.log("This method should not be here!");
  }
}
