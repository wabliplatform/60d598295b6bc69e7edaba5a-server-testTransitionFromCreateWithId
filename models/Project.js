
const { ProjectPImageSchema } =require('./ProjectPImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
Underscoreid:String , 


pTitle:String , 


pImage:  
ProjectPImageSchema
 , 


pStart:String , 


pEnd:Date , 


pDescription:String 



})

module.exports = {
  Project : mongoose.model('project', projectSchema),
}

