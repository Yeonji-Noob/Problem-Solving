let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(item => Number(item));

let num = 666;
let N = input.shift();

let count = 1
while(count !== N){
      num++;
    if (String(num).includes('666')) count++; 
      }

console.log(num);