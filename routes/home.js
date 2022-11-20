const express = require("express");
 const router = express.Router()

 const {home} = require('../controllers/homecontroller')

 router.route("/").get(home)

 module.exports = router