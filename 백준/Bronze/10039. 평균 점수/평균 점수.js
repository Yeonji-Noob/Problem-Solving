let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(item => Number(item));

let sum = 0;
for(let i = 0; i<5; i++){
    if(input[i] < 40) input[i] = 40;
    sum += input[i];
}

console.log(sum/5);