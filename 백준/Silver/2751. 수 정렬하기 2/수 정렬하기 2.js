let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let N = input.shift();
input.sort((a,b) => a-b);

console.log(...input);
