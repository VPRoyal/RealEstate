require('mongoose') 
const Location= require("../models/location.modal")
const get_location= async (query)=>{
    if(query.hasOwnProperty("search")&&query.search!='') 
    {
        // var city= await Location.find({"city":{$regex: '^' + query.search, $options: 'i'}}).select(['city','state']).exec()
        var city = await Location.aggregate([
            { $match: { "city": { $regex: '^' + query.search, $options: 'i' } } },
            { $group: { _id:{city:"$city", state:"$state"}}}
        ]).exec();        
        var state=await Location.distinct("state", {"state": {$regex: '^' + query.search, $options: 'i'}}).exec()
        var locality=await Location.find({"locality":{$regex: '^' + query.search, $options: 'i'}}).select(['locality', 'city']).exec()
        
        return {"city":city, "state":state,"locality":locality}
    }
    else return null;
}

const add_location=(data)=>{
    if(Array.isArray(data)){
        return Location.insertMany(data,{ordered:false})
    }
    const location = new Location(data)
    return location.save()
}

module.exports={
    get_location,
    add_location
}