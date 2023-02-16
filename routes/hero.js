const express = require("express");
const router = express.Router();
const heroController = require("../controller/heroController")

router.get("/", heroController.getAllHeroes);
router.get("/:id", heroController.getSingleHero);
router.post("/", heroController.createHero);
router.patch("/:id", heroController.editHero);
router.delete("/:id", heroController.deleteHero)

module.exports = router;