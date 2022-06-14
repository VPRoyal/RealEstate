require('mongoose')
const {
    get_profile,
    add_profile
} = require("../services/profile.service")

exports.profile_get = async (req, res) => {
    try {
        const profile = await get_profile(req.query)
        res.json(profile)
    } catch (err) {
        res.send("Error: " + err)
    }
}
exports.profile_post = async (req, res) => {
    try{
        await add_profile(req.body.data)
        res.send("Success")
    } catch (err) {
        res.send("Error: "+err)
    }
}