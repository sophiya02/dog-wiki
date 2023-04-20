const express = require("express");
const router = express.Router();
const { getImage, getImages } = require("../controller/control");

router.route("/").get(getImages);
router.route("/:id").get(getImage);

module.exports = router;
