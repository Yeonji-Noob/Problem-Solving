let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let S = input[0]
let i = Number(input[1]);

console.log(S.charAt(i-1));