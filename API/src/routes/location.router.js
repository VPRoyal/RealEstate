const express= require("express");
const locationControl=require("../controllers/location.controller")
const locationRouter=express.Router();

// pptRouter.use(express.urlencoded({extended:"true"}))
// pptRouter.use(express.json())
locationRouter.route("/",(req,res)=>{
    res.statusCode="200";
    res.setHeader({"Content-Type": "application/json"});
})
.get(locationControl.location_get)
.post(locationControl.location_post)

module.exports=locationRouter;