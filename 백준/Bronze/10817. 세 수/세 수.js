let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let sorted = input.map(Number).sort((a,b) => a-b);

console.log(sorted[1]);