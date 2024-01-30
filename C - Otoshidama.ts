// [C - Otoshidama](https://atcoder.jp/contests/abc085/tasks/abc085_c)

const lines=[];
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
  const [n, yen] = lines[0].split(" ").map(Number);
  let result = false;

  for(let i = 0; i <= n; i++){
    for(let j = 0; j <= n - i; j++){
      const total_amount = i * 10000 + j * 5000 + (n-i-j) * 1000;
      if(total_amount === yen){
        console.log(i,j, n-i-j);
        result = true;
        break;
      }
    }
    if(result === true) break;
  }
  if(result === false) console.log(-1, -1, -1);
});
