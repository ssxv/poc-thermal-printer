const driver = require("@ssxv/node-printer");
const localDriver = require("@ssxv/node-printer-local/printer");

const testLegacyDriver = async () => {
  const printers = await driver.getPrinters();
  console.log(printers);

  const printersLocal = await localDriver.getPrinters();
  console.log(printersLocal);

  const printer = await driver.getPrinter("Satyendra-local-receipt-printer");
  console.log(printer);

  const printerLocal = await localDriver.getPrinter("Satyendra-local-receipt-printer");
  console.log(printerLocal);
};

testLegacyDriver();
