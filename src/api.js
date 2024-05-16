const express = require("express");
const helmet = require("helmet");
const serverless = require("serverless-http");
const cors = require("cors");
const database = require("./config/database");
const { routes } = require("./routes");

const cors_options = {
  origin: "*",
  methods: ["GET", "POST"],
  credentials: true,
};

const app = express();

app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.url}`);
  next();
});

app.use(cors(cors_options));
app.use(helmet());
app.use(express.json());

app.use("/", routes);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.send(`<p> Haha not found lmao </p>`);
  } else {
    console.error(err.stack);
    res.status(err.status || 500).json({
      error: {
        message: err.message,
      },
    });
  }
});

startup = async () => {
  await database.connect();
  console.log("Server is listening on port 80");
};

shutdown = async () => {
  await database.disconnect();
};


module.exports.handler = serverless(app);