let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b] = input[0].split(' ').map(Number);

if(a > b){
   console.log('>');
   }
else if (a < b) {
    console.log('<');         
         }
else console.log('==');