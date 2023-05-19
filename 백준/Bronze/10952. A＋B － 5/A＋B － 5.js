let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

while(input[0][0] != 0){
    let number = input.shift().split(' ').map(Number);
    console.log(number[0] + number[1]);
      }