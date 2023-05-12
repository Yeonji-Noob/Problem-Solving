let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(Number(line));
}).on('close', () => {
    let [x, y] = input.map(Number);

    if (x > 0 && y > 0) console.log(1);
    else if (x < 0 && y > 0) console.log(2);
    else if (x < 0 && y < 0) console.log(3);
    else console.log(4);
    
    process.exit();
});