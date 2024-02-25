const object = (req, res, next)=>{
    req.body = {changed: true}
    console.log("second ran")
    next()
}

module.exports = object