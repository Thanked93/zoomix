import { model, Schema } from "mongoose";
import { hash, verify } from "argon2";

import { IUser, IUserModel } from "./interfaces/user";

const userSchema: Schema = new Schema({
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
  roomPassword: {
    type: String,
    required: false,
    default: "",
  },
});

userSchema.method("comparePassword", async function (password: string) {
  return await verify(this.get("password"), password);
});

userSchema.static("hashPassword", async function (password: string) {
  return await hash(password);
});

export const User: IUserModel = model<IUser, IUserModel>("User", userSchema);

export default User;
