
const express = require("express");
const controller = require("../controller/customerController");

const router = express.Router();

router.get("/", controller.get);
router.post("/", controller.add);

module.exports.router = router;