let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [N, K] = input[0].split(' ').map(Number);
let A = input[1].split(' ').map(Number);

A.sort((a, b) => a - b);

console.log(A[K-1]);