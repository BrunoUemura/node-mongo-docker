const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("HELLO WORLD!");
});

router.get("/sic", (req, res) => {
  res.send("Sic Mundus Creatus Est");
});

module.exports = router;
