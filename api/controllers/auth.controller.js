import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const signup_post = async (req, res, next) => {
  // get username and email and password from the body:
  const { username, email, password } = req.body;
  // hash password:
  const hashedPassword = bcryptjs.hashSync(password, 15);
  // create a new user:
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    // create a response:
    res.status(200).json("user created successfully!");
  } catch (error) {
    next(error);
  }
};
