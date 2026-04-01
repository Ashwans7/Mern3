const mongoose = require('mongoose')
const Schema = mongoose.Schema //properties

const blogSchema = new Schema({
    title : {
        type :  String,  
        unique : true    
    },
    subtitle : {
        type : String
    },
    description : {
        type : Text
    },
     image : {
        type : String
     },
     age : {
        type : Number
     }
})
//method
const Blog = mongoose.model('Blog',blogSchema) //blog project
module.exports = Blog //export