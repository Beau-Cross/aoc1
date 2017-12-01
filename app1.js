var fs = require('fs');
//setting up some values
var i=0;
var s = "";
var sum = 0;

fs.readFile('input.txt','utf8', function(err, data){
    for (i=0;i<data.length;i++) {

      //fetching data
      var dataLocationFirst = data.charAt(i);
      var dataLocationNext = data.charAt(i+1);

      //for the logs
      s += dataLocationFirst + " ";

      //conversion to numbers
      var numberDataLocationFirst = parseInt(dataLocationFirst);

      //collection of alike
      var alike = numberDataLocationFirst;


      //check conditions
      if (dataLocationFirst == dataLocationNext) {

        //writing the raw data
        fs.appendFile('outputRaw.txt',alike,function(err){
          if (err) throw err;
        });

        //summation equation

      }
    }


    //log position
    console.log(s);

});

setTimeout(function () {
  fs.readFile('outputRaw.txt','utf8',function(err,dataRaw){
    var sum = 0;
    for (i=0;i<dataRaw.length;i++) {
      var summingNumber = dataRaw.charAt(i);
      var summingData = parseInt(summingNumber);
      sum += summingData;
    }
    fs.appendFile('outputClean.txt',sum,function(err){
      if (err) throw err;
    });
  });
}, 2000);
