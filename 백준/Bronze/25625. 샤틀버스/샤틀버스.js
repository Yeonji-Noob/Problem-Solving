let input = require('fs').readFileSync('/dev/stdin').toString();

let [x, y] = input.split(' ').map(Number);

if(x > y) console.log( x + y );
else if (x <= y) console.log( y - x );