/*global require,process,console */
var fs = require('fs'),
    path = require('path'),
    dir = process.argv[2],
    i;
fs.readdir(dir, function (err, files) {
    'use strict';
    var fileType = '.' + process.argv[3];
    if (err) {
        throw err;
    }
    for (i = 0; i < files.length; i += 1) {
        if (path.extname(files[i]) === fileType) {
            console.log(files[i]);
        }
    }
});
