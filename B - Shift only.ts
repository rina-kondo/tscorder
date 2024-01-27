// https://atcoder.jp/contests/abc081/tasks/abc081_b

const lines=[];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
  const n = parseInt(lines[0]);
  let result = 0;
  
  let numbers = lines[1].split(" ").map(Number);
  let is_even = numbers.every(v => v % 2  === 0);
  
  while(is_even === true){
    numbers = numbers.map(v => v / 2);
    is_even = numbers.every(v => v % 2  === 0);
    result += 1;
  }

  console.log(result);
});
