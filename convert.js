var fs = require('fs');
var btoa = require('btoa');
// var atob = require('atob');

let encodeDIR = './encoded/'

fs.readdir(encodeDIR, (err, files) => {
  files.forEach(file => {
    console.log(file);
    fs.readFile(encodeDIR + file, 'utf8', (err, content) => {
      let b64Content = content.slice(9,content.length); // Slice the KLEI padding
      let decoded = new Buffer(b64Content, 'base64')
      fs.writeFile('./decoded/' + file + '.bin', decoded, "base64", () => console.log('written'))
    });

  });
})


// Convert back from Binary to Base64
// fs.readFile('export2.bin', 'binary', (err, content) => {
//   let final = new Buffer(btoa(content), 'binary')
//   fs.writeFile('export3.bin', final, "binary", () => console.log('written2'))
// })