const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

// converts nested array into flat array
console.log(_.flattenDeep(items));