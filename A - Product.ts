const lines=[];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
  const [a, b] = line[0].split(" ").Map(Number);
  let res;
  if ((a*b)%2 == 0) {
    res = "Odd"
  }else{
    res = "Even"
  }
    
  console.log(res);
});
