import { Response } from "express";

export function apiErrorHandler(err: any, res: Response) {
  if (err instanceof ApiError) {
    return res.status(err.code).json({
      message: err.message,
    });
  }
  return res.status(400).json({ message: "sth went wrong" });
}
