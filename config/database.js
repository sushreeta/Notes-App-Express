const mongoose = require('mongoose')

//db configuration
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/notes-app',{
    useNewUrlParser:true })
    .then(()=>{
        console.log('successfully connected')
    })
    .catch((err)=>{
        console.log('Error conneting to DB',err)
    })

module.exports = mongoose