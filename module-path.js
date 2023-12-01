const path = require('path')

//gets the seperator used in the path
console.log(path.sep)

//joins the path
const newpath = path.join('/content', 'subcontent', 'text.txt')
console.log(newpath);

//returns last part of the path
console.log(path.basename(newpath))
const newpath1 = path.join('/content', 'subcontent')
console.log(path.basename(newpath1));

console.log(path.join(__dirname, 'content', 'subcontent', 'text.txt'));
//alternative to above
console.log(path.resolve(__dirname, 'content', 'subcontent', 'text.txt'))