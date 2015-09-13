var fs = require('fs');

var fileBuffer = fs.readFileSync(process.argv[2]);
var stringArray = fileBuffer.toString('ascii').split('\n');
var lines = 0;
lines += stringArray.length - 1;

console.log(lines);