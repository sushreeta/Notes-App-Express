const mongoose = require('mongoose')
//here we are not taking mongoose defined in config/database.js file because DB configuration code will execute again and connection will be re-established. leads to unstable connection. 

//Note Schema
const Schema = mongoose.Schema
const noteSchema = new Schema({
    title:{
        type: String
    },
    description:{
        type:String
    },
    CreatedAt:{
        type: Date,
        default:Date.now
    },
    categoryId:{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
})

//Note Constructor function
const Note = mongoose.model('Note', noteSchema)

module.exports = Note

