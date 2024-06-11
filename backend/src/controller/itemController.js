const Item = require("../model/Item.model")

const getAllItems = async (req, res) => {
    const result = await Item.find({}).sort({ createdAt: -1 })
    res.status(200).json(result)
}

module.exports = {
    getAllItems
}