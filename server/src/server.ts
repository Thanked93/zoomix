import express from "express";
import cors from "cors";

import { config } from "dotenv";
import { createConnection } from "./database/connection/mongoose";

async function main() {
  config();
  const app = express();
  app.use(
    cors({
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    })
  );

  app.listen(process.env.PORT || 5000, () => console.log("server is running"));

  await createConnection();
}
main();
