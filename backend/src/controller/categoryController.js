const Category = require("../model/Category.model")
const Item = require("../model/Item.model.js")

const getCategory = async (req, res) => {
    const { category } = req.params

    try {
        const categoryData = await Category.findOne({ name: category })

        if (!categoryData) {
            return res.status(404).json({ message: "No data found" })
        }
        const items = await Item.find({ menuId: categoryData.menuId })

        res.status(200).json(items)

    } catch (error) {
        res.status(500).json({ message: error.message || "eroor catccher" })
    }
}

module.exports = {
    getCategory
}