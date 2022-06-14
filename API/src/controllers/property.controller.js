require('mongoose')
const {
    get_ppt,
    add_ppt
} = require("../services/property.service")

exports.ppt_get = async (req, res) => {
    try {
        const ppts = await get_ppt(req.query)
        res.json(ppts)
    } catch (err) {
        res.send("Error: " + err)
    }
}
exports.ppt_post = async (req, res) => {
    try{
        await add_ppt(req.body.data)
        res.send("Success")
    } catch (err) {
        res.send("Error: "+err)
    }
}