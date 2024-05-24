require('dotenv').config();


const express = require("express");
const helmet = require("helmet");
const http = require("http");
const cors = require("cors");
const database = require("./database");
const { routes } = require("./routes");



const cors_options = {
  origin: "*",
  methods: ["GET", "POST"],
  credentials: true,
};

const app = express();
const server = http.createServer(app);

app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}][${req.ip}] ${req.method} ${req.url}`);
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

const startup = async () => {
  await database.connect();
  console.log("Server is listening on port 80");
};

const shutdown = async () => {
  await database.disconnect();
};

server.listen(process.env.PORT || 80, startup);
server.on("close", shutdown);
process.on("SIGTERM", shutdown);
