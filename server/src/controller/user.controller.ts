import { NextFunction, Request, Response } from "express";
import {
  loginSchema,
  registerSchema,
  updateSchema,
} from "../validation/schemas";
import { v4 } from "uuid";
import ApiError from "../error/ApiError";
import User from "../database/models/user.model";

export class UserController {
  public static async register(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      // validate input
      const result = await registerSchema.validateAsync(req.body);
      // look if name already exists
      const user = await User.findOne({ username: result.username });
      if (user) {
        throw ApiError.badRequest('"Username" already exists');
      }

      // create new User
      const userResult = new User({
        username: result.username,
        password: await User.hashPassword(result.password),
        room: await v4(),
      });
      await userResult.save();
      return res.status(200).json({
        username: userResult.username,
        room: userResult.room,
        roomPassword: userResult.roomPassword,
      });
    } catch (error) {
      if (error.isJoi) {
        next(ApiError.badRequest(error.message));
      } else {
        next(error);
      }
    }
  }

  public static async login(req: Request, res: Response, next: NextFunction) {
    try {
      // validate input
      const result = await loginSchema.validateAsync(req.body);
      // look for user in database
      const user = await User.findOne({ username: result.username });
      if (!user) {
        next(ApiError.badRequest("Username or password wrong"));
        return;
      }
      // check password
      const matchingPw = await user.comparePassword(result.password);
      if (!matchingPw) {
        next(ApiError.badRequest("Username or password wrong"));
        return;
      }
      return res.status(200).json({
        username: user.username,
        room: user.room,
        roomPassword: user.roomPassword,
      });
    } catch (error) {
      if (error.isJoi) {
        next(ApiError.badRequest(error.message));
      } else {
        next(error);
      }
    }
  }

  public static async update(req: Request, res: Response, next: NextFunction) {
    try {
      // validate input
      const result = await updateSchema.validateAsync(req.body);
      // Check for user
      const user = await User.findOne({ username: result.username });
      if (!user) {
        next(ApiError.badRequest("Username or password wrong"));
        return;
      }
      // check password
      const matchingPw = await user.comparePassword(result.password);
      if (!matchingPw) {
        next(ApiError.badRequest("Username or password wrong"));
        return;
      }
      // find and update
      await User.updateOne(
        { username: result.username },
        {
          password: await User.hashPassword(result.changedPassword),
          username: result.changedUsername,
          roomPassword: result.roomPassword,
        }
      );
      console.log("Updated");

      // return
      return res.status(200).json({
        username: result.changedUsername,
        room: user.room,
        roomPassword: result.roomPassword,
      });
    } catch (error) {
      if (error.isJoi) {
        next(ApiError.badRequest(error.message));
      } else {
        next(error);
      }
    }
  }
}

export default UserController;
