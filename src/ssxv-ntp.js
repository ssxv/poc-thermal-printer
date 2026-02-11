const { printers, jobs } = require("@ssxv/node-printer");
const { PrinterTypes, ThermalPrinter } = require("node-thermal-printer");

const printer = new ThermalPrinter({
  type: PrinterTypes.EPSON,
  interface: `printer:Satyendra-local-receipt-printer`,
  driver: {
    getPrinter: async (printerName) => {
      const printer = await printers.get(printerName);
      console.log("Printer details:", printer);
      return {
        status: printer.state === "offline" ? ["NOT-AVAILABLE"] : [],
      };
    },
    printDirect: async (parameters) => {
      const { data, printer, docname, type, success, error } = parameters;
      try {
        const job = await jobs.printRaw({
          printer,
          data: Buffer.isBuffer(data) ? data : Buffer.from(data, "utf-8"),
          format: type || "RAW",
          options: {
            jobName: docname,
          },
        });
        success(job.id);
      } catch (err) {
        error(err);
      }
    },
  },
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
    "\u001ba\u0000\n\n\u001b!\u0000\u001ba\u0000\n\u001b!\u0000\u001b!\bItem                                 Price\n\u001b!\u0000\u001ba\u0000------------------------------------------\n\u001b!\u0000Emi sandwich `                       $6.00\n\u001b!\u0000\u001ba\u0002                                __________\n\u001b!\u0000Subtotal                             $6.00\n\n\u001b!\u0000Punchh Discount QA                  -$0.02\n\u001b!\u0000Taxes                                $0.21\n\u001b!\u0000\u001ba\u0002                                __________\n\u001b!\u0000\u001b!\bTotal                                $6.19\n\u001b!\u0000\u001ba\u0000\n\u001b!\u0000   Offline Tendered                  $6.19\n\u001b!\u0000\u001ba\u0000\n\n\n\n\n\u001b!\u0000\u001ba\u0000\n\u001dVA\t";
  try {
    const job = await printer.raw(raw);
    console.log("Print success.", job);
  } catch (error) {
    console.error("Print error:", error);
  }
};

printRawData();
