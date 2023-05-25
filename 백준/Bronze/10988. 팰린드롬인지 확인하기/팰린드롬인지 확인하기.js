let word = require('fs').readFileSync('/dev/stdin').toString().trim();
let reverseWord = word.split('').reverse().join('');

let answer = word == reverseWord? 1 : 0;

console.log(answer);
