let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [N, k] = input[0].split(' ').map(Number);

let arr = [];
for(let i = 1; i<=N; i++){
    let nums = input[1].split(' ').map(Number);
    nums.sort((a, b) => b - a);
    arr.push(nums[i-1]);
}

console.log(arr[k-1]);