let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

for (let i = 1; i <= N; i++) {
    let word = input[i].split(' ');
    word[0] = 'god';
    console.log(word.join(''));
}