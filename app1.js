var fs = require('fs');

var i=0;
var s = "";
var sum = 0;
var data = 0;

fs.truncate('outputRaw.txt');
fs.truncate('outputClean.txt');

fs.readFile('input.txt','utf8', function(err, data){
    for (i=0;i<data.length;i++) {
      s += data[i]+" ";

      if (data[i] == data[i+1]) {
        fs.appendFile('outputRaw.txt',data[i],function(err){
          if (err) throw err;
        });
      }
    }
    console.log(s);
});

setTimeout(function () {
  fs.readFile('outputRaw.txt','utf8',function(err,dataRaw){
    var sum = 0;
    for (i=0;i<dataRaw.length;i++) {
      var dataRawS = dataRaw[i];
      var dataRawI = parseInt(dataRawS);
      sum += dataRawI;
    }
    fs.appendFile('outputClean.txt',sum,function(err){
      if (err) throw err;
    });
    console.log("--------------------------");
    console.log("Your sum is: "+sum+" (OwO )");
    console.log("--------------------------");
  });
}, 1000);
