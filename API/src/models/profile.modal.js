const mongoose=require('mongoose');
const {Schema}=mongoose

const profile= new Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
    },
    mobile:{
        type:Number,
        unique:true
    },
    pass:{
        type:String,
        required:true
    },
    listed_prop:[Array],
    bookmarked_prop:[Array],
    created_at:Date,

})

module.exports=mongoose.model("Profile",profile)