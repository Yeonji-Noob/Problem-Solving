let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);

for(let i = 1; i<=n; i++) console.log(' '.repeat(n-i)+'*'.repeat(i));