let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [N, S, V] = input

let answer = S.split(" ").filter( num => num == V).length;

console.log(answer);