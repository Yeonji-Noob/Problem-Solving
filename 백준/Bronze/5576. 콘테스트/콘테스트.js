let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

let W = []; 
for(let i = 0; i<10; i++){
    W.push(input[i]);   
}
W.sort((a,b) => a-b);

let K = [];
for(let j = 10; j<20; j++){
    K.push(input[j]);
}
K.sort((a,b) => a-b);

let sumW = W.slice(-3).reduce((acc, cur) => acc + cur, 0);
let sumK = K.slice(-3).reduce((acc, cur) => acc + cur, 0);

console.log(`${sumW} ${sumK}`);