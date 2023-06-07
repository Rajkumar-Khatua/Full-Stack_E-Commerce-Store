const {
    verifyToken,
    VerifyTokenAutherization,
    VerifyTokenAdmin,
} = require("./varifyToken");
const CryptoJS = require("crypto-js");
const Order = require("../models/Order");

const router = require("express").Router();

// CREATE PRODUCT
router.post("/", verifyToken, async (req, res) => {
    // create a new order
    const newOrder = new Order(req.body);

    try {
        // save the Order
        const savedOrder = await newOrder.save();
        res.status(200).send(savedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
})

// UPDATE Order
router.put("/:id", VerifyTokenAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json(err);
    }
});

//delete a Order
// TODO----->>>        // Little bit Confuse here Cuz User can delete his Order it Should be VerifyTokenAutherization Maybe
router.delete("/:id", VerifyTokenAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted");
    } catch (error) {
        res.status(500).json(err);
    }
});

// Get User ORDER
router.get("/find/:userId", VerifyTokenAutherization, async (req, res) => {
    try {
        const order = await Order.findById({ userid: req.params.id });

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get all User Order'S 
router.get("/", VerifyTokenAdmin, async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET MONTHLY REVENUE
router.get("/income", VerifyTokenAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err + "Something went wrong");
    }
})
module.exports = router