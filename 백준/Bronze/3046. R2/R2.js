let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let [R1, S] = input.map(item => Number(item));

console.log(2*S - R1);