import User from "../models/user.model.js";
import { handleErrors } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({ message: " Hello World!" });
};

// function to update the user:
export const updateUser = async (req, res, next) => {
  // checked the user:
  if (req.user.id !== req.params.id) {
    return next(handleErrors(401, "You can only update your own accoubt!"));
  }
  try {
    //checked if there is password:
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 15);
    }
    // update the user:
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avator: req.body.avator,
        },
      },
      { new: true }
    );

    // hidden the password:
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
