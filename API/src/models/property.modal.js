const mongoose=require("mongoose")
const {Schema} =mongoose


const addressSchema= new Schema({
    country:{
        type:String,
        // required:true
    },
    state:{
        type:String
    },
    city:{
        type:String,
        // required:true
    },
    landmark:{
        type:String
    },
    areacode:{
        type:String,
        // required:true
    },
    locality:{
        type:String,
    },
    street:{
        type:String
    }
})
const floorMapSchema=new Schema({
    available:{
        type:Boolean,
        default:false
    },
    links:[String]
})
const videoTourSchema=new Schema({
    available:{
        type:Boolean,
        default:false
    },
    links:[String]
})
const pptSchema= new Schema({
    _id:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    images:{
        type:[String],
        required:true
    },
    rate:{
        type:Number,
        required:true
    },
    area:{
        type:Number,
        // required:true
    },
    address:[ addressSchema ],
    floormap: [ floorMapSchema ],
    videotour:[ videoTourSchema ],
    sellerID:{
        type:String,
        // required:true
    }

},{
    timestamps:true,
    _id:false
})

module.exports=mongoose.model("Property",pptSchema)