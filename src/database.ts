import mongoose, { ConnectOptions } from "mongoose";
import config from "./config/config";

/**
 * ! Doesn't work
 */
// const dbOptions: ConnectionOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };
// mongoose.connect(config.DB.URI, dbOptions);

mongoose.connect(config.DB.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mondodb connection stablished");
});

connection.on("error", (err) => {
  console.log(err);
  process.exit(0);
});
