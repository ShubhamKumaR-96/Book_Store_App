const express = require("express");
const User = require("./user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

const JWT_SCERET = process.env.JWT_SECRET_KEY;

router.post("/admin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await User.findOne({ username });
    if (!admin) {
      res.status(404).send({ message: "Admin not found" });
    }
    if (admin.password !== password) {
      res.status(401).send({ message: "Invalid pssoword" });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
        role: admin.role,
      },
      JWT_SCERET,
      { expiresIn: "1h" }
    );
    return res.status(200).json({
      message: "Authication succesfully",
      token: token,
      user: {
        id: admin._id,
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Failed to login as admin", error);
    res.status(401).send({ msg: "failed to login as admin" });
  }
});

module.exports = router;
