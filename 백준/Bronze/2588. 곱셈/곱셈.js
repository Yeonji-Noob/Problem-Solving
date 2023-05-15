let [a, b] = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [x_3, x_2, x_1] = b;

console.log(`${a * x_1}\n${a * x_2}\n${a * x_3}\n${a * Number(b)}`);
