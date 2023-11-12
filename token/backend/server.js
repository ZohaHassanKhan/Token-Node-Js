const express=require('express')
const app=express()
const jwt=require('jsonwebtoken')
const port=3000
const dotenv=require('dotenv')
const security_key="security"
const connectDb=require('./Connection/connection')
dotenv.config({path:'Connection/Config.env'})
const morgan=require('morgan')
const path = require('path'); // Add this line

//log request
app.use(morgan('tiny'))
app.use(express.json())

connectDb()
app.use('/',require('./Routes/router'))  //***use routes created in router.js***
   

app.listen(port,()=>{
    console.log(`Server is listeningg on Port ${port}`);
})