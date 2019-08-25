const mongoogse=require('mongoose');
const Schema=mongoogse.Schema;

const directorSchema=new Schema({
    name:String,
  
    birth:Number
  
});
module.exports=mongoogse.model('Director',directorSchema);