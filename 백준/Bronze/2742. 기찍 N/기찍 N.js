let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

let answer = '';
for(let i = N; i>=1; i--){
    answer += `${i}\n`;
}

console.log(answer);