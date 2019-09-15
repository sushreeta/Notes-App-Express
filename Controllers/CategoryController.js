const Category = require('../app/models/category')

//list
module.exports.list = (req,res)=>{
     Category.find()
         .then((cat)=>{
             res.json(cat)
         })
         .catch((err)=>{
             res.json(err)
         })
 }

 //create
 module.exports.create = (req,res)=>{
     const {body} = req
     const category = new Category(body)
     category.save()
         .then((category)=>{
             res.json(category)
         })
         .catch((err)=>{
             res.json(err)
         })
 }

 //show
 module.exports.show = (req,res) =>{
     const id = req.params.id
     Category.findById(id)
         .then((category)=>{
              if(category){
                   res.json(category)
              } else {
                   res.json({})
              }
         })
         .catch((err)=>{
              res.json(err)
         })
}

module.exports.update = (req,res)=>{
    const { body } = req
    const { id } = req.params
    Category.findByIdAndUpdate(id, body, {new:true, runValidators:true})
        .then((category)=>{
            if(category){
                res.json(category)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.destroy = (req,res) =>{
    const {id} = req.params
    Category.findByIdAndDelete(id)
        .then((category)=>{
            if(category){
                res.json(category)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}