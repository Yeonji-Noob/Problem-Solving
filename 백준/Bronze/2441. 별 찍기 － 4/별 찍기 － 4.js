let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);

for(let i = 0; i<testCase; i++){
    console.log(' '.repeat(i)+'*'.repeat(testCase-i));  
}
