let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

for(let i = N; i>=1; i--){
    console.log('*'.repeat(i));
}