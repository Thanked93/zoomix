class ApiError {
  code: number;
  message: string;

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }

  public static badRequest(msg: string) {
    return new ApiError(400, msg);
  }
}
