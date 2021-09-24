const fs = require('fs');

const arrFonts = fs.readdirSync('./fontsSrc');
fs.writeFile('fontsName.json', JSON.stringify(arrFonts), 'utf-8', function(err){
  console.log(err)
})