/*global require,process,console,module */
var http = require('http'),
    concat = require('concat-stream'),
    url = process.argv[2],
    printResponse = function (data) {
        'use strict';
        var dataString = data.toString();
        console.log(dataString.length);
        console.log(dataString);
    },
    printError = function (err) {
        'use strict';
        console.log(err);
    },
    handleResponse = function (response) {
        'use strict';
        response.setEncoding('utf8');
        response.pipe(concat('data', printResponse).on('error', printError));
    };
http.get(url, handleResponse);
