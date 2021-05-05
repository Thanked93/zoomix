import { model, Schema } from "mongoose";
import { hash } from "argon2";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    index: true,
    minLength: [3, "The username cannot have less than 3 characters"],
    maxLength: [30, "The username cannot have more than 30 characters"],
    required: true,
  },
  password: {
    type: String,
    minlength: [8, "The password needs to have at least 8 characters"],
    maxLength: [50, "The password should not have more than 50 characters"],
    required: true,
  },
  room: {
    type: String,
    unique: true,
    required: true,
  },
  roompassword: {
    type: String,
    required: false,
    default: "",
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    const hashedPassword = await hash(this.get("password"));
    this.set("password", hashedPassword);
  }
});

export default model("User", userSchema);
