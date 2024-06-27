import mongoose from "mongoose";

// create a new schema:
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// create a model from the schema:
const User = mongoose.model("User", userSchema);
// export the model:
export default User;
