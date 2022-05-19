const db = require("../database/connection.js");
const layout = require("../layout.js");

function get(request, response) {
  db.query("SELECT * FROM reviews").then((result) => {
    const reviewsObjects = result.rows;
    const allReviews = reviewsObjects.map((review) => {
      return `
      <div>
        <h2>${review.username}</h2>
        <h3>${review.title}</h3>
        <h4>${review.author}</h4>
        <p>${review.rating}</p>
        <p>${review.textcontent}</p>
      </div>
      `;
    });
    const html = layout(
      "Written Tomatoes",
      `
        <h1>Written Tomatoes Reviews</h1>
        <div>${allReviews.join("")}</div>
        <a href="/write-review">Write a new review</a>
    `
    );

    response.send(html);
  });
}

module.exports = { get };
