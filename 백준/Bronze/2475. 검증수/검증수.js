let input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

let sum = input.map(item => item**2).reduce((a,c) => a+c);

console.log(sum%10);