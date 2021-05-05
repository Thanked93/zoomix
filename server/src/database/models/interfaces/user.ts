import { Document, Model } from "mongoose";

export interface IUserDocument extends Document {
  username: string;
  password: string;
  room: string;
  roomPassword: string;
}

export interface IUser extends IUserDocument {
  comparePassword(password: string): boolean;
}

export interface IUserModel extends Model<IUser> {
  hashPassword(password: string): string;
}
