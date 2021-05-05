import express from "express";
import cors from "cors";

import { config } from "dotenv";
import { createConnection } from "./database/connection/mongoose";
import userRouter from "./routes/UserRouter";
import { apiErrorHandler } from "./error/api-error-handler";

async function main() {
  config();
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    })
  );
  app.use(userRouter);

  app.use(apiErrorHandler);
  await createConnection();
  app.listen(process.env.PORT || 5000, () => console.log("server is running"));
}
main();
