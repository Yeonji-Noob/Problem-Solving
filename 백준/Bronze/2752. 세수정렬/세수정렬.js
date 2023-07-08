let input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

let answer = input.sort((a, b) => a - b);

console.log(...answer);