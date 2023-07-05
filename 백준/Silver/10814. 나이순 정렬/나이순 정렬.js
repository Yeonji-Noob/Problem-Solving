let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = input.shift();

input.sort((a, b) => a.split(' ')[0] - b.split(' ')[0] );

console.log(input.join('\n'));