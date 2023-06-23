let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

let number = input.shift();

for(let i = 0; i<number; i++){
    if(input[i]%2 === 0) console.log(`${input[i]} is even`);
    else console.log(`${input[i]} is odd`);
}