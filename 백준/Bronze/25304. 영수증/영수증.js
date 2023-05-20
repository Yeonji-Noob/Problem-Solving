let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let X = Number(input[0]);
let N = Number(input[1]);
let sum = 0;

for(let i = 2; i <= N+1; ++i){
    let numbers = input[i].split(' ').map(Number);
    sum += numbers[0] * numbers[1]
}

console.log(sum === X? 'Yes' : 'No');