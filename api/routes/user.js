const {
    verifyToken,
    VerifyTokenAutherization,
    VerifyTokenAdmin,
} = require("./varifyToken");
const CryptoJS = require("crypto-js");
const User = require("../models/User");

const router = require("express").Router();

// update the User
router.put("/:id", VerifyTokenAutherization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASSWORD_SEC
        ).toString();
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(err);
    }
});
//delete
router.delete("/:id", VerifyTokenAutherization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    } catch (error) {
        res.status(500).json(err);
    }
});
// get user
router.get("/find/:id", VerifyTokenAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;

        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get all users normal and by query params
router.get("/", VerifyTokenAdmin, async (req, res) => {
    const query = req.query.new;

    try {
        const users = query
            ? // find the users in the sorted manner and added new users
            await User.find().sort({ _id: -1 }).limit(6)
            : await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET USERS STATS
router.get("/stats", VerifyTokenAdmin, async (req, res) => {
    const date = new Date();
    const lastyear = new Date(date.getFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastyear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err + "Something went wrong");
    }
});

module.exports = router;
