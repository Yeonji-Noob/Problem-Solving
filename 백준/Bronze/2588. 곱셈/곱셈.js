let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let a = input[0];
let b = input[1];

x_1 = b[2];
x_2 = b[1];
x_3 = b[0];

console.log(`${a * x_1}\n${a * x_2}\n${a * x_3}\n${a * Number(b)}`);
