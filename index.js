// THE ETHEREUM CODE
// const { ethers } = require("ethers");
// const { FormatTypes, Interface } = require("ethers/lib/utils");
// const abi = require("./abi.json");

// const iface = new Interface(abi);

// console.log(iface.format(FormatTypes.minimal)); // Log all of the contract's function signatures
// console.log(iface.getFunction("0x3a66e193").name); // Log the name of a specific function, given its encoded signature
// // THE WEBSITE
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  fs.createReadStream("index.html").pipe(res);
});

server.listen(process.env.PORT || 3000);
