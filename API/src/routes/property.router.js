const express= require("express");
const pptControl=require("../controllers/property.controller")
const pptRouter=express.Router();

// pptRouter.use(express.urlencoded({extended:"true"}))
// pptRouter.use(express.json())
pptRouter.route("/",(req,res)=>{
    res.statusCode="304";
    res.set({
        "X-Powered-By": "VINAY",
        'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type'
    })
    // res.setHeader('Content-Type', 'application/json');
})
.get(pptControl.ppt_get)
.post(pptControl.ppt_post)

module.exports=pptRouter;