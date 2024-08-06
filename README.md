POC for printing directly to a USB connected thermal printer

based on:
1. https://www.npmjs.com/package/node-thermal-printer
2. https://www.npmjs.com/package/@thiagoelg/node-printer


`@thiagoelg/node-printer` uses node-gyp to build binaries. So, depending on node version and OS you'll need native build tools

check:

https://github.com/nodejs/node-gyp?tab=readme-ov-file#node-gyp---nodejs-native-addon-build-tool

For Windows OS, with node v20:

https://github.com/nodejs/node-gyp?tab=readme-ov-file#on-windows
- python 3.12
- Visual Studio 2022 with "Desktop development with C++" workload


```
npm install

// for printer name check Windows settings -> Devices and Printers
node ./connected.js 'printer:Printer Name'
node ./example.js 'printer:Printer Name'

// for default printer
// set default printer from Windows settings -> Devices and Printers
node ./connected.js 'printer:auto'
node ./example.js 'printer:auto'
```