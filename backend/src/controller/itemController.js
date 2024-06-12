const Item = require("../model/Item.model")

const getAllItems = async (req, res) => {
    const result = await Item.find({})
        .sort({ menuId: 1 })
    res.status(200).json(result)
}

const getSerarchItems = async (req, res) => {
    const { q } = req.query;
    try {
        let items;
        if (q) {
            items = await Item.find({ name: { $regex: q, $options: 'i' } })
        }
        res.status(200).json(items)
    } catch (err) {
        res.status(404).json({ message: "No Items Found!" })
    }

}

const getSingleItem = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Item.findById(id)
        res.status(200).json(item)
    } catch (error) {
        res.status(404).json({ message: "No Item found" })

    }
}

module.exports = {
    getAllItems, getSerarchItems, getSingleItem
}