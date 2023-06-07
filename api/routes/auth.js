const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

// import json WebToken
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  // create a new user

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    mobileNo: req.body.mobileNo,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SEC
    ).toString(),
  });

  try {
    // save the new user
    const savedUser = await newUser.save();
    // send the new user
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    // find user by username
    const user = await User.findOne({ username: req.body.username });

    // if user is not found
    !user && res.status(401).json("Wrong Credentials User not found");

    // find user that user by password
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SEC
    );

    // decode the hashed password
    const Mainpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    // if passoword is not matched
    Mainpassword !== req.body.password &&
      res.status(401).json("Wrong Credentials Password is Not Matched");

    // after login use jsonWeb Token
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" }
    );

    // hide Credentials informations
    const { password, ...others } = user._doc;
    // if everything is good return the user
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error + "Please enter proper details");
  }
});

module.exports = router;
