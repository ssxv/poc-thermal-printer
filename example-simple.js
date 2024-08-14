const { ThermalPrinter, PrinterTypes } = require('node-thermal-printer')

async function example() {
  const printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: process.argv[2],
    driver: require('@thiagoelg/node-printer')
  });

  const isConnected = await printer.isPrinterConnected();
  console.log('Printer connected:', isConnected);
  if (!isConnected || !process.argv[3]) return;
  
  printer.alignLeft();
  printer.println(process.argv[3]);
  printer.cut();
  console.log(printer.getText());

  try {
    await printer.execute();
    console.log('Print success.');
  } catch (error) {
    console.error('Print error:', error);
  }
}

example();
