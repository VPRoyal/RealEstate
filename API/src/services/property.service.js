require('mongoose') 
const Property= require("../models/property.modal")
const get_ppt= (query)=>{
    if(query.hasOwnProperty("id")) return Property.findOne({_id:query.id}).exec()
    return Property.find().skip(parseInt(query.skip)).limit(parseInt(query.limit))
}

const add_ppt=(data)=>{
    console.log(data)
    if(Array.isArray(data)){
        return Property.insertMany(data,{ordered:false})
    }
    const property = new Property(data)
    return property.save()
}

module.exports={
    get_ppt,
    add_ppt
}