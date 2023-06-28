let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let [n, h, v] = input.map(Number);

let cake = Math.max(h,(n-h)) * Math.max(v, (n-v));

console.log(cake * 4);