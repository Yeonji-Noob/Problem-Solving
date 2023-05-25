let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, A, M, B] = input.map(num => num.split(' '));

let arr = new Set(A); 
let answer = B.map( item => arr.has(item)? 1 : 0);

console.log(answer.join('\n'));