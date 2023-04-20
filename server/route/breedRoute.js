const express = require("express");
const router = express.Router();
const { getBreed, getAllBreeds } = require("../controller/control");

router.route("/").get(getAllBreeds);
router.route("/:id").get(getBreed);

module.exports = router;
