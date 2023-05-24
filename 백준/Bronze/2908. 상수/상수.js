let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let [A, B] = input.map(num => Number(String(num).split('').reverse().join('')));

console.log(A > B? A : B);
