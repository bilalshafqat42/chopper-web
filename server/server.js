import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 4000;
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

// database initiallize
connectDB();

const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser
app.use(cookieParser());

// routes
app.use("/api/users", userRoutes);

// middleware
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => res.send("server is ready"));

app.listen(port, () =>
  console.log(`server started on port ${process.env.PORT}`)
);
