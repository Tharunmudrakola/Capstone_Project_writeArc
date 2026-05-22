import { connect } from "mongoose";
import { config } from "dotenv";
import { userRoute } from "./APIs/UserAPI.js";
import cookieParser from "cookie-parser";
import { adminRoute } from "./APIs/AdminAPI.js";
import { authorRoute } from "./APIs/AuthorAPI.js";
import { commonRouter } from "./APIs/CommonAPI.js";
import express from "express";
import cors from "cors";

config();

const app = express();

// CORS middleware
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// body parser middleware
app.use(express.json());

// cookie parser middleware
app.use(cookieParser());

// connect APIs
app.use("/user-api", userRoute);
app.use("/author-api", authorRoute);
app.use("/admin-api", adminRoute);
app.use("/common-api", commonRouter);

// connect to DB
const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("DB connection success");

    // start server
    app.listen(process.env.PORT, () =>
      console.log(`server started on port ${process.env.PORT}`)
    );
  } catch (err) {
    console.log("Err in DB connection", err);
  }
};

connectDB();

// invalid path middleware
app.use((req, res, next) => {
  console.log(req.url);
  res.json({ message: `${req.url} is invalid path` });
});

// error handling middleware
app.use((err, req, res, next) => {
  console.log("Error name:", err.name);
  console.log("Error code:", err.code);
  console.log("Full error:", err);

  // mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message,
    });
  }

  // mongoose cast error
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message,
    });
  }

  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;

  const keyValue =
    err.keyValue ??
    err.cause?.keyValue ??
    err.errorResponse?.keyValue;

  // duplicate key error
  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];

    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`,
    });
  }

  // custom errors
  if (err.status) {
    return res.status(err.status).json({
      message: "error occurred",
      error: err.message,
    });
  }

  // default server error
  res.status(500).json({
    message: "error occurred",
    error: "Server side error",
  });
});