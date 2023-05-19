let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach(line => {
    let [a, b] = line.split(' ');
    console.log(+a + +b);
});