const {
  verifyToken,
  VerifyTokenAutherization,
  VerifyTokenAdmin,
} = require("./varifyToken");
const CryptoJS = require("crypto-js");
const Product = require("../models/Product");

const router = require("express").Router();

// CREATE PRODUCT
router.post("/", VerifyTokenAdmin, async (req, res) => {
  // create a new product
  const newProduct = new Product(req.body);

  try {
    // save the product
    const savedProduct = await newProduct.save();
    res.status(200).send(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});
// UPDATE product
router.put("/:id", VerifyTokenAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(err);
  }
});

//delete a product
router.delete("/:id", VerifyTokenAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (error) {
    res.status(500).json(err);
  }
});

// Get a product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all Products normal and by query params
router.get("/", async (req, res) => {
  const newquery = req.query.new;
  const newCategory = req.query.category;

  try {
    let products;
    if (newquery) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (newCategory) {
      products = await Product.find({
        categories: {
          $in: [newCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error + "Does not exist");
  }
});

module.exports = router;
