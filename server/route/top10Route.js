const express = require("express");
const router = express.Router();
const { getTop10 } = require("../controller/control");

router.route("/").get(getTop10);

module.exports = router;
