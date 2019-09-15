const express = require('Express')
const app = express()
const mongoose = require('./config/database')
const Note = require('./app/models/note')
const router = require('./config/routes')
const port = 3005

//To parse the incoming data from app.post()
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        notice:'welcome to the notes taking app'
    })
})

//this wil redirect all the router to route.js inside config
app.use('/',router)

app.listen(port,()=>{
    console.log('listening on port',port)
})
