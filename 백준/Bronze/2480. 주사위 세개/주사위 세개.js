let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b, c] = input[0].split(' ').map(Number);

if (a === b && b === c) console.log(10000+a*1000);
else if ( a === b || b === c || c === a ) {
    const num = a === b || b === c ? b : c;
    console.log(1000 + num * 100);
} 
else console.log(Math.max(a, b, c)*100);

