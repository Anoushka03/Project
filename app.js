const express = require('express')


// middlewares 
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(process.env.PORT||3000,()=>{
    console.log(`Server started at port ${process.env.PORT||3000}`)
})