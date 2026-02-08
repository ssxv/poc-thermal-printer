const driver = require("@ssxv/node-printer");

driver.getPrinters().then((printers) => {
  console.log("Available printers:");
  printers.forEach((printer) => {
    console.log(`- ${printer.name}`);
  });
});

const PRINTER_NAME = "Satyendra-local-receipt-printer";
driver
  .getPrinter(PRINTER_NAME)
  .then((printer) => {
    console.log(printer);
  })
  .catch((error) => {
    console.error(`Error fetching printer "${PRINTER_NAME}":`, error);
  });

driver
  .getPrinter()
  .then((printer) => {
    console.log("Default printer:");
    console.log(printer);
  })
  .catch((error) => {
    console.error("Error fetching default printer:", error);
  });
