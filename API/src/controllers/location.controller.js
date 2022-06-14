require('mongoose')
const {
    get_location,
    add_location
} = require("../services/location.service")

exports.location_get = async (req, res) => {
    try {
        const locations = await get_location(req.query)
        res.json(locations)
    } catch (err) {
        res.send("Error: " + err)
    }
}
exports.location_post = async (req, res) => {
    try{
        await add_location(req.body.data)
        res.send("Success")
    } catch (err) {
        res.send("Error: "+err)
    }
}