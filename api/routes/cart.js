const {
  verifyToken,
  VerifyTokenAutherization,
  VerifyTokenAdmin,
} = require("./varifyToken");
const CryptoJS = require("crypto-js");
const Cart = require("../models/Cart");

const router = require("express").Router();

// CREATE PRODUCT
router.post("/", verifyToken, async (req, res) => {
  // create a new Cart
  const newCart = new Cart(req.body);

  try {
    // save the Cart
    const savedCart = await newCart.save();
    res.status(200).send(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE CART
router.put("/:id", VerifyTokenAutherization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(err);
  }
});

//delete a CART
router.delete("/:id", VerifyTokenAutherization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted");
  } catch (error) {
    res.status(500).json(err);
  }
});

// Get User CART
router.get("/find/:userId", VerifyTokenAutherization, async (req, res) => {
  try {
    const cart = await Cart.findById({ userId: req.params.id });

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all User CART'S
router.get("/", VerifyTokenAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
