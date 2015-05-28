/*global require,process,console,module */
var http = require('http'),
    url = process.argv[2],
    handleResponse = function (response) {
        'use strict';
        response.setEncoding('utf8');
        response.on('data', function (s) {
            console.log(s);
        });
    };
http.get(url, handleResponse);
