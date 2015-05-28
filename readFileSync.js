/*global require,process,console */
var fs = require('fs'),
    newLines,
    buf,
    filePath = process.argv[2];
buf = fs.readFileSync(filePath,'utf-8');
newLines = buf.split('\n').length - 1;
console.log(newLines);
