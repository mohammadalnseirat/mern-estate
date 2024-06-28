import bcryptjs from "bcryptjs";
import { handleErrors } from "../utils/error.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// funtion for signup user:
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

// function to signin user:
export const signin_post = async (req, res, next) => {
  // get email and password from the body:
  const { email, password } = req.body;
  try {
    // check the email:
    // find user by email:
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(
        handleErrors(404, "User not found! Please try to sign up again.")
      );
    }
    // check the password:
    // compare hashed password with password stored:
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(handleErrors(404, "Wrong password! Please try again."));
    }

    // create a token :
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);
    // reset password:
    const { password: pass, ...rest } = validUser._doc;
    // save token to prowsser:
    res
      .cookie("access_token", token, {
        httpOnly: false,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
