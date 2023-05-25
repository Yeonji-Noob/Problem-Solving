let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = input.shift();

let answer = new Set();
for (let i = 0; i < n; i++) {
  let [name, commuting] = input[i].split(' ');
  if (commuting === 'enter') answer.add(name);
  if (commuting === 'leave') answer.delete(name);
}

let sortedAnswer = [...answer].sort().reverse();
console.log(sortedAnswer.join('\n'));