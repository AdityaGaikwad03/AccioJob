const express = require("express")
const fs = require('fs')

const app = express()
const PORT = 8000;

app.get('/',(req, res)=>{
    const stream = fs.createReadStream('./demo.txt','uts-8');
    stream.on('data', (chunk)=>{
        res.write(chunk)
    })
    stream.on('end',()=>res.end());
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})