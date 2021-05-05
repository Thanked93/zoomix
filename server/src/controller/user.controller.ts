import { NextFunction, Request, Response } from "express";
import { loginSchema, registerSchema } from "../validation/schemas";
import { v4 } from "uuid";
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
        next(ApiError.badRequest('"Username" already exists'));
        return;
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
      if (error.isJoi) error.status = 400;
      next(error);
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
      if (error.isJoi) error.status = 400;
      next(error);
    }
  }
}
