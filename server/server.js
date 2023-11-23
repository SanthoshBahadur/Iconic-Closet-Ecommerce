import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

// env config
dotenv.config();

// database config
connectDb();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", authRoutes);

// portf
const PORT = process.env.PORT;

// rest api
app.get("/", (req, res) => {
  res.send("<h1>Hello Santhosh Bahadur</h1>");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
