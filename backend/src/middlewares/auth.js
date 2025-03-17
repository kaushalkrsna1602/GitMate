const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    // console.log(token)
    if (!token) {
      return res.status(401).send("Please Login!");
    }

    // console.log(process.env.JWT_SECRET);
    
    const decodedObj = await jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decodedObj)
    const { _id } = decodedObj;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR1: " + err.message);
  }
};

module.exports = {
  userAuth,
};