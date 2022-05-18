const express = require("express");

const home = require("./routes/home.js");

const server = express();

const bodyHandler = express.urlencoded({ extended: false });

server.use(bodyHandler);

server.get("/", home.get);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
