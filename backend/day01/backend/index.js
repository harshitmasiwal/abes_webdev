const express = require('express')
const app = express()
const cors = require('cors')

const stuData = require('./studentData')

app.use(cors())



app.get('/data',(req,res)=>{
    res.send(stuData)
})





app.listen(3000,()=>{
    console.log("server is running on port 3000")
})