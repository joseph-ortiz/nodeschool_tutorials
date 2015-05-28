/*global console,process */
var result = 0;
//console.log(process.argv);
//for (i = 2; i < process.argv.length; i += 1) {
//    result += Number(process.argv[i]);
//}

process.argv.forEach(function (el, index) {
    'use strict';
    if (index > 1 && !isNaN(el)) {
        result += Number(el);
    }
});
console.log(result);
