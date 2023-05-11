let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b, c] = input[0].split(' ').map(Number);

console.log(`${(a+b)%c}\n${((a%c)+(b%c))%c}\n${(a*b)%c}\n${((a%c)*(b%c))%c}`); 