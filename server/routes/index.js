const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

// Rotas

router.get("/", mainController.homepage);
router.get("/about", mainController.about);

module.exports = router;