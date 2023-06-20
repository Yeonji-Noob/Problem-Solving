let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let [A, B, V] = input.map(Number);

console.log(Math.ceil((V-B)/(A-B)));