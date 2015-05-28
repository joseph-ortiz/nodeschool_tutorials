/*global require,process,console */
var fs = require('fs');
fs.readFile(process.argv[2],'utf-8', function (err, data) {
    'use strict';
    var newLines;
    if (err) {
        console.log('Error found: ' + err);
    }else{
      newLines = data.split('\n').length - 1;
      console.log(newLines);
    }
});
