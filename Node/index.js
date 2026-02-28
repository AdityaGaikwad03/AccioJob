const fs = require('fs')
//create file sync. call ./ current folder
// fs.writeFileSync('./text.txt',"hello world");

//update
// fs.writeFileSync('./text.txt',"hello new world");

//read
// let result = fs.readFileSync('./text.txt','utf-8')
// console.log(result)

// in both async read and write  acceptsw a call back
//unlike readFileSync, readFile does not return a value
//it accepts a callback func that handels the error and result
// fs.readFile('./text.txt','utf-8',(err, result)=>{
//     if(err){
//         console.log("error", err)
//     }
//     else{
//         console.log(result)
//     }
// })

// fs.appendFileSync('./text.txt', new Date().getDate().toLocaleString())
// fs.appendFileSync('./text.txt',`\n new text`)

// copy
// fs.copyFileSync('./text.txt', './copyText.txt');


// delete
// fs.unlinkSync('./copyText.txt')


//find propertices and stat about file (info)
// console.log(fs.statSync('./text.txt')) 

//check file exists or not 
// console.log(fs.statSync('./text.txt').isFile())


// make a directory
// fs.mkdirSync('my-doc')

// folder inside folder complex directory
// fs.mkdirSync('my-doc2/a/b', {recursive: true})


// fs.writeFile('./text.txt', "hello hiii")