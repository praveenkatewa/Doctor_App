const express = require("express");
const colors = require("colors");
const morgan = require("morgan"); 
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();

// dotenv config
dotenv.config();

// mongodb connection
connectDB();


// middlewares
app.use(express.json());
app.use(morgan("dev")); // ✅ fixed spelling

// routes
app.use("/api/v1/users", require("./routes/userRoutes"));

// port
const port = process.env.PORT || 8080;

// listen port
app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_MODE} mode on port ${port}`.bgCyan
      .white
  );
});
