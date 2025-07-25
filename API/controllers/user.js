import { User } from "../models/User.js";

import bcrypt from "bcryptjs";

//user register
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      throw new Error("Please provide all the fields");
    }
    let user = await User.findOne({ email });
    if (user) {
      throw new Error("User already exists");
    }

    const hashpass = await bcrypt.hash(password, 10);

    user = await User.create({
      name,
      email,
      password: hashpass,
    });
    res.json({ message: "User registered successfully", user, success: true });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//user login

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }
    res.json({
      message: `${user.name} logged in successfully`,
      user,
      success: true,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//get all users

export const getAllusers = async (req, res) => {
  try {
    let users = await User.find().sort({ createdAt: -1 });
    res.json({ users });
  } catch (error) {
    res.json({ message: error.message });
  }
};
