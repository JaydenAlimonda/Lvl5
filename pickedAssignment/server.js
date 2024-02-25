
const express = require("express")
const app = express()
const changedObject = require("./changeObject")


app.use("/object", (req, res, next)=>{
    req.body = {changed: false}
    console.log("first ran")
    next()
})


app.use("/object", changedObject)



app.get("/object", (req, res)=>{
    res.send(req.body)
})


app.listen(7000, () => {
    console.log("server running")
})