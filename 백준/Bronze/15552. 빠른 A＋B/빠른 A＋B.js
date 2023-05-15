const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);

const answer = input.map(line => {
  const [a, b] = line.split(' ').map(Number);
  return a + b;
}).join('\n');

console.log(answer);
