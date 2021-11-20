const { getAllUsers } = require("../db/helpers/user-queries");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  getAllUsers()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
