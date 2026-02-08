const driver = require("@thiagoelg/node-printer");
const PRINTER_NAME = "Satyendra-local-receipt-printer";

const printer = driver.getPrinter(PRINTER_NAME);
console.log(printer);

driver.getJob(PRINTER_NAME, 1).then((jobDetails) => {
  console.log(`Print job details for printer "${PRINTER_NAME}":`);
  console.log(jobDetails);
}).catch((error) => {
  console.error(`Error fetching print job details for printer "${PRINTER_NAME}":`, error);
});