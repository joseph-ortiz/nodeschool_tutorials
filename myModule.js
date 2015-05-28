/*global require,process,console,module */
var fs = require('fs'),
    path = require('path'),
    dir = process.argv[2],
    i;
module.exports = function (dirname, type, callback) {
    'use strict';
    fs.readdir(dirname, function (err, files) {
        var fileType = '.' + type;
        var result = [];
        if (err)
            return callback(err);
        for (i = 0; i < files.length; i += 1) {
            if (path.extname(files[i]) === fileType) {
                result.push(files[i]);
            }
        }
        //console.log(result);
        return callback(null, result);//console.log();
    });
};
