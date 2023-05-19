let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 0; i<input.length; i++){
    let answer = input[i].split(' ');
    console.log(Number(answer[0])+Number(answer[1]));
}