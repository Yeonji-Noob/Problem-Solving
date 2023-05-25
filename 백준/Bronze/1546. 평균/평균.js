let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let number = Number(input.shift());
let score = input[0].split(' ').map(Number);
let M = Math.max(...score);

let sum = 0;
for(let i = 0; i<number; i++){
    sum += score[i]/M * 100;
}
    
console.log((sum/number).toFixed(5));



