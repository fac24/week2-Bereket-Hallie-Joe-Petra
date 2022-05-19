const express = require("express");

const home = require("./routes/home.js");
const addReview = require("./routes/addReview.js");

const server = express();

const bodyHandler = express.urlencoded({ extended: false });
const staticHandler = express.static("public");

const staticHandler = express.static("public");

server.use(bodyHandler);
server.use(staticHandler); 


server.get("/", home.get);
server.get("/write-review", addReview.get);
server.post("/write-review", addReview.post);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
