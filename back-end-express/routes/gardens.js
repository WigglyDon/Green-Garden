const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const {} = require("../db/helpers/gardens-queries");

router.get("/", (req, res) => {
  getUsers()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
