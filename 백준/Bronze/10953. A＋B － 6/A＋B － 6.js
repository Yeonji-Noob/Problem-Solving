let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = Number(input[0]);

for(let i = 1; i<=testCase; i++){
    let numbers = input[i].split(',');
    console.log(+numbers[0] + +numbers[1]);
}