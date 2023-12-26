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
