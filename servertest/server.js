const express = require("express");
const mongoose = require ('mongoose')
const morgan = require('morgan')
const app = express();
mongoose.set('strictQuery', true)

app.use(express.json())

app.use(morgan('dev'))
mongoose.connect('mongodb+srv://jaydenalimonda:2LHkqmu2G173JeiI@cluster1.pmmrdel.mongodb.net/', (err)=>{console.log('connected to db err = ', err)})


app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errormsg: err.message})
})

app.listen(7500, ()=>{
    console.log('server running port 7500')
})