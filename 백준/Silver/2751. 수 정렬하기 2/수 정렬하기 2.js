let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = input.shift();
let sorted = input.sort((a,b) => a-b);

console.log(input.join('\n'));
