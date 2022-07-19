import cors from "cors";
import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes";

/**
 * * Initializations
 */
const app = express();

/**
 * * Settings
 */
app.set("port", process.env.PORT || 3000);

/**
 * * Middlewares
 */
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/**
 * Routes
 */
app.get("/", (req, res) => {
  res.send(`The API is at http://localhost:${app.get("port")}`);
});

app.use(authRoutes);

export default app;
