const router = require("express").Router();
const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");
router.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.send({
        message: "User already exist",
        success: false,
        data: null,
      });
    }
    // const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    console.log(req.body);
    const newUser = new User(req.body);
    await newUser.save();
    res.send({
      message: "User added successfully",
      success: true,
      data: null,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
      data: null,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (!userExist) {
      return res.send({
        message: "User does not exist",
        success: false,
        data: null,
      });
    } else {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        userExist.password
      );
      if (!passwordMatch) {
        return res.send({
          message: "Please enter the correct password",
          success: false,
          data: null,
        });
      }
      const token = jwt.sign(
        {
          userId: userExist._id,
        },
        process.env.jwt_secret,
        { expiresIn: "1d" }
      );
      res.send({
        message: "User login successfully",
        success: true,
        data: token,
      });
    }
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
      data: null,
    });
  }
});

router.post("/get-user-by-id", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    res.send({
      message: "User featch successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
      data: null,
    });
  }
});

module.exports = router;
