const mongoose = require("mongoose")
const { Schema } = mongoose

const location= new Schema({
    _id:{
        type:String,
        unique:true,
        index:true
    },
    locality:{
        type:String,
        index:true,
        required: true,
        unique:false
    },
    city:{
        type:String,
        index:true,
        required:true,
        unique:false
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    properties:[String]
})
module.exports = mongoose.model("Location", location)