const uuid = require('uuid').v4;
const express = require("express")
const app = express()
// const uuid = require("uuid")
const users =[
{name:"joe", age: 20, _id: uuid()}, 
{name:"boe", age: 20, _id: uuid()}, 
{name:"loe", age: 20, _id: uuid()}, 
{name:"poe", age: 20, _id: uuid()}, 
{name:"coe", age: 20, _id: uuid()}

]
app.get("/users", (req,res)=>{
    res.send(users)
})


app.listen(7000, () => {
    console.log("server running")
})