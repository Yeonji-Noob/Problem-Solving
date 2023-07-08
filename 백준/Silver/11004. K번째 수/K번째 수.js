let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [N, K] = input[0].split(' ').map(Number);
let num = input[1].split(' ').map(Number);

let A = [];
for(let i = 0; i<N; i++){
    A.push(num[i]);
}

A.sort((a, b) => a - b);

console.log(A[K-1]);