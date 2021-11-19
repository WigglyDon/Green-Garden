const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  getUsers()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Show details of a user
router.get("/:id", (req, res) => {
  const userId = Number(req.params);

  getUser(userId)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// const userId = req.session.user_id;
// Create a user
router.post("/", (req, res) => {
  res.send("ok");
});

// Login user
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  getUserByEmail(email)
    .then((data) => {
      const user = data;
      if (bcrypt.compareSync(password, user.password)) {
        req.session.user_id = user.id;
        // res.cookie('user_id', userId)
        res.send({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          id: user.id,
        });
        return;
      }
      res.send("Incorrect email/password");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// LOGOUT
router.post("/logout", (req, res) => {
  req.session = null;
  res.send(null);
});

module.exports = router;
