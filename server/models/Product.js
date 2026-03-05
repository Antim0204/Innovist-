const mongoose=require('mongoose');
const { timeStamp } = require('node:console');

const ProductSchema=new mongoose.Schema({
    name:{type:String ,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:String,required:true}
    },{timeStamps:true});

module.exports=mongoose.model("Poduct",ProductSchema);

