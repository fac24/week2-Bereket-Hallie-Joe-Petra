const db = require("../database/connection.js");

function get(request, response) {
    response.send("hello world")
   
}

module.exports = { get };