const express = require("express");
const router = express.Router();
const { authLogin, authRefreshToken } = require("../controllers/auth")

router.post("/refresh", authRefreshToken)
router.post("/login", authLogin)

module.exports = router