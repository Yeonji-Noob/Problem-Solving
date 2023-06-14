let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

for (let i = 1; i <= N; i++) {
    let line = ' '.repeat(N - i) + '*'.repeat(2 * i - 1);
    console.log(line);
}