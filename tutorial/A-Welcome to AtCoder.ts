const lines=[];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
    const a = +lines[0];
    const [b, c] = lines[1].split(" ").map(Number)
    const s = lines[2];
    
    console.log(a + b + c, s);
});
