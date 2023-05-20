let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);

let answer = '';
for(let i = 0; i<N/4; i++) {
    answer += 'long ';
}
console.log(`${answer}int`);

