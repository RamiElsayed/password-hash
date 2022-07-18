const { Router } = require("express");

const router = Router();


router.post('/', loginUser);

module.exports = router;