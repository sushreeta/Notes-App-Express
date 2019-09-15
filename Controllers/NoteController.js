const Note = require('../app/models/note')

//list
module.exports.list = (req,res)=>{
     Note.find()
         .then((notes)=>{
             res.json(notes)
         })
         .catch((err)=>{
             res.json(err)
         })
 }
 

 //create
 module.exports.create = (req,res)=>{
     const body = req.body
     const note = new Note({
         title:body.title,
         description:body.description
     })
     note.save()
         .then((note)=>{
             res.json(note)
         })
         .catch((err)=>{
             res.json(err)
         })
 }

 //show
 module.exports.show = (req,res) =>{
      const id = req.params.id
      Note.findById(id)
          .then((note)=>{
               if(note){
                    res.json(note)
               } else {
                    res.json({})
               }
          })
          .catch((err)=>{
               res.json(err)
          })
 }
 