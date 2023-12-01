// Sync task will execute on call

// method 1st using file system
const fs = require('fs')
const first = fs.readFileSync('./content/first.txt', 'utf8')
console.log(first)

// create the new file, and if exists it will overwrite
fs.writeFileSync('./content/first-result.txt', `Content from first file : ${first}`)
console.log('----------------------------')
console.log(fs.readFileSync('./content/first-result.txt', 'utf8'))
console.log('----------------------------','\n')


//method 2nd destructing the methods
const { readFileSync, writeFileSync } = require('fs')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(second)
// create the new file, and if exists it will overwrite
// writeFileSync('./content/second-result.txt', `Content from second file : ${second}`)
console.log('----------------------------')
console.log(fs.readFileSync('./content/second-result.txt', 'utf8'))
console.log('----------------------------','\n')

//to append into the file
writeFileSync('./content/second-result.txt', `\n${Date.now()} : New line inserted`,{flag:'a'})
