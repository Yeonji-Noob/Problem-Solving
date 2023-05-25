let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(item => Number(item));

const maxValue = Math.max(...input);
let index = input.indexOf(maxValue);

console.log(`${maxValue}\n${index+1}`);