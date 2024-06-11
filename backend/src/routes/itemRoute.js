const express = require("express")
const router = express.Router()

const ItemController = require("../controller/itemController")

router.get("/all-items", ItemController.getAllItems)
    .get("/items", ItemController.getSerarchItems)
    .get("/items/:id", ItemController.getSingleItem)

module.exports = router;