const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const number = Number(input.shift());
const score = input[0].split(' ').map(Number);
const M = Math.max(...score);
const newScore = score.map(item => item/M * 100);
const sum = newScore.reduce((acc, cur) => acc + cur);
    
console.log(sum/number);



