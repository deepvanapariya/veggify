const mongoose = require("mongoose")
const { Schema } = mongoose;

const CategorySchema = new Schema({
    name: String,
    menuId: Number
})

module.exports = mongoose.model("Category", CategorySchema);

