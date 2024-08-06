const { ThermalPrinter, PrinterTypes } = require('node-thermal-printer')

async function example() {
  const printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: process.argv[2],
    driver: require('@thiagoelg/node-printer')
  });

  const isConnected = await printer.isPrinterConnected();
  console.log('Printer connected:', isConnected);

  const raw = `@!a 3PO

!a Server: Y Mejia                       Counter Service
!a Check # 5021                                         
!a 8/5/2024 9:31 AM                                     

!a Drive-Thru                                           
!a 

!!a 1 B4-BUR-SPCY              
!!a    MD-PO                   
!!a    Side Nacho Cheese       
!!a    Lemonade                
!!a      Wildberry Wave, Medium


!a Drive-Thru                                           
!a Items in this Order: 1                               
!a 

!a -----------------------------------------------------!a 
VA`;
  try {
    await printer.raw(raw);
    console.log('Print success.');
  } catch (error) {
    console.error('Print error:', error);
  }
}

example();
