let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);

for (let i = 1; i<=testCase; i++){
    let startStr = input[i].charAt(0);
    let endStr = input[i].charAt(input[i].length -1);
    console.log(`${startStr}${endStr}`);
}



