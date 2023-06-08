let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let arr = [];
for(let i = 1; i<=30; i++){
	if(input.includes(i)) continue;
	arr.push(i);
}

arr.sort((a, b) => a - b);

console.log(`${arr[0]}\n${arr[1]}`);