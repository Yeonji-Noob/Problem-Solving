let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

let arr = [];
for(let i = 1; i<=N; i++){
    arr.push(input[i]);
}

arr = [...new Set(arr)];

let compare = (a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    else {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    }; 
}

arr.sort(compare);

let answer = '';
for(let str of arr) {
    answer += `${str}\n`;
}

console.log(answer);