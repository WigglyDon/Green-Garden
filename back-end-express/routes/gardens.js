const express = require("express");
const router = express.Router();
const { getAllGardens } = require("../db/helpers/garden-queries");

router.get("/", (req, res) => {
  getAllGardens()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
