let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 0; i<input.length; i++){
	if(input[i] !== 'END') {
	    let answer = input[i].split('').reverse().join('');
        console.log(answer);
    }
}

