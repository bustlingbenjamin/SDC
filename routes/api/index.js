const express = require("express");
const router = express.Router();
const targetsRoute = require('./targets')

router.use('/targets', targetsRoute);

module.exports = router;