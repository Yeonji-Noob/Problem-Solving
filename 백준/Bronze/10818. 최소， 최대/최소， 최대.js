let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let nums = input[1].split(' ').map(Number);
let min = Math.min(...nums);
let max = Math.max(...nums);

console.log(`${min} ${max}`);
