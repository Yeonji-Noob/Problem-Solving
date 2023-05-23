let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = input.shift();
let num = input.sort((a, b) => a - b);

for(let i = 0; i < N; i++){
    console.log(input[i]);
}