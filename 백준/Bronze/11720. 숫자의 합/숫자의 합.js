let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = Number(input[0]);

let N = input[1].split('').map(Number).reduce((a,b) => a+b);
console.log(N);