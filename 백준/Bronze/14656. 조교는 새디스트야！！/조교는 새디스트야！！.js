let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);

let num = input[1].split(' ').map(item => Number(item));

let answer = 0;
for(let i = 1; i <= testCase; i++){
    if(i !== num[i-1]) answer++;
}

console.log(answer);