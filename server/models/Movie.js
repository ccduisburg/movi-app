const mongoogse=require('mongoose');
const Schema=mongoogse.Schema;

const movieSchema=new Schema({
    title:String,
    description:String,
    year:Number,
    directorId:String
});
module.exports=mongoogse.model('Movie',movieSchema);