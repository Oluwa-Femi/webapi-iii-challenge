const express = require('express');
const cors = require("cors");
const helmet = require("helmet");
const userRouter = require("./users/userRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(logger);
server.use(cors());
server.use("/api/users", userRouter);

sserver.get("/", (req, res) => {
  res.send(`<h2>Middlewares!</h2>`);
});

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      "Origin"
    )}`
  );

  next();
}

//custom middleware


module.exports = server;
