let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let S = input.shift();

for(let i = 0; i < S; i++){
    let answer = '';
    
    let [R, str] = input[i].split(' ');
    
    for(let j = 0; j < str.length; j++){
        answer += str[j].repeat(R);
    }

    console.log(answer);
}




