let input = require('fs').readFileSync('/dev/stdin').toString();

let answer = [];
for (let i = 97; i<=122; i++) {
    answer.push(input.indexOf(String.fromCharCode(i)));
}

console.log(answer.join(' '));