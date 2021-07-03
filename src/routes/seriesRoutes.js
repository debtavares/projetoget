const controller = require("../controllers/seriesControllers.js")

const express = require("express")
const router = express.Router()

router.get("/", controller.home)
router.get("/todos", controller.getAll)
router.get("/titulo", controller.getTitle)

module.exports = router