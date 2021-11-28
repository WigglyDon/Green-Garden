const express = require("express");
const router = express.Router();
const {
  getAllGardens,
  postNewGarden,
  deleteAGarden,
} = require("../db/helpers/garden-queries");

router.get("/", (req, res) => {
  getAllGardens()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.post("/", (req, res) => {
  const data = req.body.state;
  // console.log('DATA Garden',data)
  postNewGarden(data)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.delete("/:id", (req, res) => {
  const data = req.params.id;
  console.log("gardenId", data);
  // console.log('DATA Garden',data)
  deleteAGarden(data)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
