require('mongoose') 
const Profile= require("../models/profile.modal")
const get_profile=async (query)=>{
    if(query.hasOwnProperty("t")&&query.t=="auth"){
        if(query.hasOwnProperty("email")&&query.hasOwnProperty("pass")){
            var user;
            user = await Profile.findOne({"email":query.email}).exec();            
            if(user){
                if(query.pass===user.pass) return {email:query.email, auth:true, message:"Success"}
                else return {message:"Password not correct", auth:false}
            } else  return {message:"User not exist", auth:false}
        }
        else return null;
    }
}

const add_profile=(data)=>{
    if(Array.isArray(data)){
        return Profile.insertMany(data,{ordered:false})
    }
    const profile = new Profile(data)
    return profile.save()
}

module.exports={
    get_profile,
    add_profile
}