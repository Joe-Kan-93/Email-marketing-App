const express = require("express");
const router = express.Router();

const Controller = require("../controllers/client");

router.post("/client/software-development", Controller.createSoftware_developmentClient);
router.post("/client/it-support", Controller.createIT_supportClient);

module.exports = router;