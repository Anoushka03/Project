// requiring modules 
const express = require('express')
const ejs = require('ejs')


// middlewares 
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.raw())

app.set('view engine', 'ejs');
app.use(express.static('public'))


// ====== 

app.get('/',(req,res)=>{
    res.render('index',{})
})



app.listen(process.env.PORT||3000,()=>{
    console.log(`Server started at port ${process.env.PORT||3000}`)
})