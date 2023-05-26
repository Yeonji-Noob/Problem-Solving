let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(item => Number(item));

let K = input.shift();

let stack = [];
let sum = 0;
for(let i = 0; i<K; i++){
	if(input[i] == 0){
		sum -= stack.pop();
	} else {
        stack.push(input[i]);
        sum += input[i];
    }
}

console.log(sum);