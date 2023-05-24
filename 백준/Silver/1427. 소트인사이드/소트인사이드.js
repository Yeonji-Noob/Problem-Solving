let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(num => Number(num));

console.log(input.sort().reverse().join(''));