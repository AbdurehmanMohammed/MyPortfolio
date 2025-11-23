import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";
import config from "./../../config/config.js";

const signin = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ error: "User not found" });
    if (!user.authenticate(req.body.password)) {
      return res.status(401).send({ error: "Email and password don't match." });
    }
    const token = jwt.sign({ _id: user._id }, config.jwtSecret);
    res.cookie("t", token, { expire: new Date() + 9999 });
    
    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role, // ADD ROLE TO RESPONSE
      },
    });
  } catch (err) {
    return res.status(401).json({ error: "Could not sign in" });
  }
};

// ADD SIGNUP FUNCTION
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create user (your existing model handles password encryption)
    const user = await User.create({
      name,
      email,
      password, // This will be handled by your virtual setter
      role: 'User' // Default role
    });

    const token = jwt.sign({ _id: user._id }, config.jwtSecret);
    res.cookie("t", token, { expire: new Date() + 9999 });

    return res.status(201).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const signout = (req, res) => {
  res.clearCookie("t");
  return res.status(200).json({
    message: "signed out",
  });
};

const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ["HS256"],
  userProperty: "auth",
});

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) {
    return res.status(403).json({
      error: "User is not authorized",
    });
  }
  next();
};

// ADD ADMIN MIDDLEWARE
const requireAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'Admin') {
    return res.status(403).json({
      error: "Admin access required",
    });
  }
  next();
};

// ADD GET CURRENT USER ENDPOINT
const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.auth._id).select('-hashed_password -salt');
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { 
  signin, 
  signup, // EXPORT SIGNUP
  signout, 
  requireSignin, 
  hasAuthorization, 
  requireAdmin, // EXPORT ADMIN MIDDLEWARE
  getCurrentUser // EXPORT GET CURRENT USER
};