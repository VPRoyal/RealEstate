const express= require("express");
const profileControl=require("../controllers/profile.controller")
const profileRouter=express.Router();

// profileRouter.use(express.urlencoded({extended:"true"}))
// profileRouter.use(express.json())
profileRouter.route("/",(req,res)=>{
    res.statusCode="200";
    res.setHeader('Content-Type', 'application/json');
})
.get(profileControl.profile_get)
.post(profileControl.profile_post)

module.exports=profileRouter;