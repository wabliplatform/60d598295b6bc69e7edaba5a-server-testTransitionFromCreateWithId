
const { ProjectPImageSchema } =require('./ProjectPImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
Underscoreid:String , 


pTitle:String , 


pImage:  
ProjectPImageSchema
 , 


pDescription:String , 


pEnd:Date 



})

module.exports = {
  Project : mongoose.model('project', projectSchema),
}

