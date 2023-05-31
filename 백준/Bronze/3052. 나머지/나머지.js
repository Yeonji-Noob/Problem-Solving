let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = new Set();
for(let i = 0; i<10; i++){
    N.add(input[i]%42);
}

console.log(N.size);