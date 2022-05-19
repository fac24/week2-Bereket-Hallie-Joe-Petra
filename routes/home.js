const db = require("../database/connection.js");
const layout = require("../layout.js");

function get(request, response) {
  db.query("SELECT 'hello everyone' AS bananas").then((result) => {
    const html = layout(
      "Written Tomatoes",
      /*html*/ `
        <h1>Test</h1>
        <p>${result.rows[0].bananas}</p>
    `
    );

    response.send(html);
  });
}

module.exports = { get };
