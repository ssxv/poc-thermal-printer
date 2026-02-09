const driver = require("@ssxv/node-printer-local/printer");
const { PrinterTypes, ThermalPrinter } = require("node-thermal-printer");

const PRINTER_NAME = "Satyendra-local-receipt-printer"; // Replace with actual printer name

const printer = new ThermalPrinter({
  type: PrinterTypes.EPSON,
  interface: `printer:${PRINTER_NAME}`,
  driver: driver,
});

printer
  .isPrinterConnected()
  .then((isConnected) => {
    console.log(`Printer connection status: ${isConnected}`);
  })
  .catch((error) => {
    console.error(`Error checking printer connection: ${error.message}`, error);
  });

const printRawData = async () => {
  const raw =
    "\u001b@\u001d(L\u0006\u00000E00\u0001\u0001\u001b!\u0000\u001ba\u0000\n\n\u001b!\u0000\u001ba\u0000\n\u001b!\u0000\u001b!\bItem                                 Price\n\u001b!\u0000\u001ba\u0000------------------------------------------\n\u001b!\u0000Emi sandwich `                       $6.00\n\u001b!\u0000\u001ba\u0002                                __________\n\u001b!\u0000Subtotal                             $6.00\n\n\u001b!\u0000Punchh Discount QA                  -$0.02\n\u001b!\u0000Taxes                                $0.21\n\u001b!\u0000\u001ba\u0002                                __________\n\u001b!\u0000\u001b!\bTotal                                $6.19\n\u001b!\u0000\u001ba\u0000\n\u001b!\u0000   Offline Tendered                  $6.19\n\u001b!\u0000\u001ba\u0000\n\n\n\n\n\u001b!\u0000\u001ba\u0000\n\u001dVA\t";
  try {
    await printer.raw(raw);
    printer.cut();
    const job = await printer.execute();
    console.log("Print success.", job);
  } catch (error) {
    console.error("Print error:", error);
  }
};
printRawData();
