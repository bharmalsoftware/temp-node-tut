// async task executes are completion of all tasks

const fs = require('fs');

console.log('Execute first')
// if we dont provide the UTF coding it will return result in the buffer
fs.readFile('./content/first.txt', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Read 1st file : ', result);
})

fs.readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Read 2nd file : ', result);
})

console.log('Execute in last')

// create a new file by joining content of the two files
fs.readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log('Error on 1st read : \n', err);
        return
    }
    const firstfile = result;

    fs.readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log('Error on 2nd read : \n', err);
            return
        }
        const secondfile = result;

        fs.writeFile('./content/new-combined.txt', `Combined file\n${firstfile}\n${secondfile}`, (err, result) => {
            if(err){
                console.log('Error creating file : \n',err)
                return
            }
            console.log('File created successfully')
        })
    })
})