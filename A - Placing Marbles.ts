// すぬけ君は 1,2,3 の番号がついた 3 つのマスからなるマス目を持っています。 
// 各マスには 0 か 1 が書かれており、マス i には si が書かれています。
// すぬけ君は 1 が書かれたマスにビー玉を置きます。 ビー玉が置かれるマスがいくつあるか求めてください。

// input
// 101
// output
// 2

const lines=[];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
    const str = lines[0].split('').map(Number);
    let res = 0;
    for(let i=0; i<str.length;  i++){
      res += str[i];
    }
    
    console.log(res);
});
