// https://atcoder.jp/contests/abc087/tasks/abc087_b

const lines=[];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
  let total_amount;
  let count = 0;
  const x = parseInt(lines[3]);

  for(let a = 0; a <= parseInt(lines[0]); a++){
    for(let b = 0; b <= parseInt(lines[1]); b++){
      for(let c = 0; c <= parseInt(lines[1]); c++){
        total_amount = 500 * a + 100 * b + 50 * c;
        if (x === total_amount) count ++;
      }
    }
  }
  
  console.log(count);
});
