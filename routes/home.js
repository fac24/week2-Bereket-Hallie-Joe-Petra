const db = require("../database/connection.js");

function get(request, response) {
  db.query("SELECT 'hello everyone' AS test").then((result) => {
    response.send(result.rows);
  });
}

module.exports = { get };
