const driver = require("@ssxv/node-printer");

driver.getPrinters().then((printers) => {
  console.log("Available printers:");
  printers.forEach((printer) => {
    console.log(printer);
  });
});

const PRINTER_NAME = "Satyendra-local-receipt-printer";
driver
  .getPrinter(PRINTER_NAME)
  .then((printer) => {
    console.log(`Printer "${PRINTER_NAME}":`);
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

driver
  .getDefaultPrinterName()
  .then((printerName) => {
    console.log("Default printer name:", printerName);
  })
  .catch((error) => {
    console.error("Error fetching default printer name:", error);
  });

driver
  .getPrinterDriverOptions(PRINTER_NAME)
  .then((options) => {
    console.log(`Driver options for printer "${PRINTER_NAME}":`);
    console.log(options);
  })
  .catch((error) => {
    console.error(
      `Error fetching driver options for printer "${PRINTER_NAME}":`,
      error,
    );
  });

// driver
//   .getJob(PRINTER_NAME)
//   .then((jobDetails) => {
//     console.log(`Print job details for printer "${PRINTER_NAME}":`);
//     console.log(jobDetails);
//   })
//   .catch((error) => {
//     console.error(
//       `Error fetching print job details for printer "${PRINTER_NAME}":`,
//       error,
//     );
//   });

driver
  .getSelectedPaperSize(PRINTER_NAME)
  .then((paperSize) => {
    console.log(
      `Selected paper size for printer "${PRINTER_NAME}":`,
      paperSize,
    );
  })
  .catch((error) => {
    console.error(
      `Error fetching selected paper size for printer "${PRINTER_NAME}":`,
      error,
    );
  });

driver
  .getSupportedJobCommands(PRINTER_NAME)
  .then((commands) => {
    console.log(
      `Supported job commands for printer "${PRINTER_NAME}":`,
      commands,
    );
  })
  .catch((error) => {
    console.error(
      `Error fetching supported job commands for printer "${PRINTER_NAME}":`,
      error,
    );
  });

driver
  .getSupportedPrintFormats(PRINTER_NAME)
  .then((formats) => {
    console.log(formats);
  })
  .catch((error) => {
    console.error(
      `Error fetching supported print formats for printer "${PRINTER_NAME}":`,
      error,
    );
  });

driver.printDirect({
  data: "Hello, World!",
  printer: PRINTER_NAME,
  type: "RAW",
});

driver.getJob(PRINTER_NAME, 8).then((jobs) => {
  console.log(`Print jobs for printer "${PRINTER_NAME}":`);
  console.log(jobs);
});
