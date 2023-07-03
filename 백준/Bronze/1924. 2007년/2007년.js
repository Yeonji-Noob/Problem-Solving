let input = require('fs').readFileSync('/dev/stdin').toString();

let [x, y] = input.split(' ').map(item => Number(item));

let day = new Date(2007, x-1, y);
const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
let week = WEEKDAY[day.getDay()];

console.log(week);