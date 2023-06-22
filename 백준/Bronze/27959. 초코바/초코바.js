let input = require('fs').readFileSync('/dev/stdin').toString();

let [N, M] = input.split(' ').map(Number);

if(100*N >= M) console.log('Yes');
else console.log('No');