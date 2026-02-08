const driver = require("@thiagoelg/node-printer");
const PRINTER_NAME = "Satyendra-local-receipt-printer";

const printer = driver.getPrinter(PRINTER_NAME);
console.log(printer);