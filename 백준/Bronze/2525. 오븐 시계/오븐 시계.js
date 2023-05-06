let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let [hour, min] = input[0].split(" ").map(Number);
let cookTime = Number(input[1]);

min += cookTime;

while(min >= 60) {
    min -= 60;
    hour += 1;  
      }

hour %= 24;

console.log(`${hour} ${min}`);