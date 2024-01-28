// [B - Some Sums](https://atcoder.jp/contests/abc083/tasks/abc083_b)

const lines=[];
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
  const [N, A, B] = lines[0].split(" ").map(Number);
  let result = 0;
  
  for(let i = 1; i <= N; i++){
    const N1 = i % 10;
    const N10 = (i % 100) - N1;
    const N100 = (i % 1000) - N10 - N1;
    const N1000 = (i % 10000) - N100 - N10 - N1;
    const N10000 = (i % 100000) - N1000 - N100 - N10 - N1;

    const total = N1 + N10/10 + N100/100 + N1000/1000 + N10000/10000;

    if (A <= total && total <= B) result += i; 
  }
  
  console.log(result);
});
