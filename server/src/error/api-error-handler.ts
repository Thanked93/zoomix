import { NextFunction, Response, Request } from "express";
import ApiError from "./ApiError";

export function apiErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ApiError) {
    return res.status(err.code).json({
      message: err.message,
    });
  }
  return res.status(400).json({ message: "sth went wrong" });
}
