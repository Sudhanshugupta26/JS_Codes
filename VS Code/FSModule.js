import fs from 'fs'
fs.mkdirSync('C:\\Users\\Pradeep Saxena\\Desktop\\TestFile');
console.log("File Created.")
fs.writeFileSync('text.txt','Hello World!');
fs.rmdirSync('C:\\Users\\Pradeep Saxena\\Desktop\\TestFile');
console.log("File Deleted.");