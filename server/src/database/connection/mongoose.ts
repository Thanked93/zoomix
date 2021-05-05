import { connect, connection } from "mongoose";

export async function createConnection() {
  await connect(process.env.DB_URI as string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  await connection.once("open", () => {
    console.log("connection to mongoose established");
  });
}
