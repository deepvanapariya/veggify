const Item = require("../model/Item.model")

const getAllItems = async (req, res) => {
    const result = await Item.find({})
    console.log("all-items==>", result)

    res.status(200).json(result)
}

module.exports = {
    getAllItems
}