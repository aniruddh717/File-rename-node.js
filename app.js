//node.js file system

var fs = require('fs');

fs.rename('index.txt', 'myrenamedfile.txt', function (err) {  //function to rename the existing file
    if (err) throw err;
    console.log('File Renamed!');
  });