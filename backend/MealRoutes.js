const { Router } = require("express");


const router = Router();

router.get("/", (req, res) => {
    res.json({test: "WE GOT HERE!!!!"})
});


module.exports = router;
