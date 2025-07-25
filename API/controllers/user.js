import { User } from "../models/User.js";

import bcrypt from "bcryptjs";

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
    res.json({ message: "User registered successfully", success: true });
  } catch (error) {
    res.json({ message: error.message });
  }
};
