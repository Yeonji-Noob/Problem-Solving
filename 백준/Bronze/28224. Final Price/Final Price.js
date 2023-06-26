let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

let n = input.shift();

let answer = 0;
input.forEach(number => answer += number);

console.log(answer);