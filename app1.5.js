var fs = require('fs');

var i=0;
var s = "";
var sum = 0;
var data;

fs.truncate('outputRaw1.5.txt');
fs.truncate('outputClean1.5.txt');

fs.readFile('input1.5.txt','utf8', function(err, data){
    for (i=0;i<2120;i++) {
      s += data[i]+" ";

      if (data[i] == data[i+1060]) {
        fs.appendFile('outputRaw1.5.txt',data[i],function(err){
          if (err) throw err;
        });
      }
    }
    console.log(s);
});

setTimeout(function () {
  fs.readFile('outputRaw1.5.txt','utf8',function(err,dataRaw){
    var sum = 0;
    for (i=0;i<dataRaw.length;i++) {
      var dataRawS = dataRaw[i];
      var dataRawI = parseInt(dataRawS);
      sum += dataRawI;
    }
    fs.appendFile('outputClean1.5.txt',sum,function(err){
      if (err) throw err;
    });
    console.log("---------------------------------------------");
    console.log("Your sum for Question 2 is: "+sum+" (OwO )");
    console.log("---------------------------------------------");
  });
}, 1000);
