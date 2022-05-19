const db = require("../database/connection.js");
const layout = require("../layout.js");

function get(request, response) {
  db.query("SELECT * FROM reviews").then((result) => {
    const reviewsObjects = result.rows;
    const allReviews = reviewsObjects.map((review) => {
      return `
      <li class ="review">
      <div class ="username">
        <h2>${review.username}</h2>

            <div class ="head_post" >
              <h3>${review.title}</h3>
              <h4>${review.author}</h4>
              <div>${review.rating}</div>
            </div>
      </div>
        <p class ="book_feedback">${review.textcontent}</p>
      
      </li>
      `;
    });
    const html = layout(
      "Written Tomatoes",
      `
        <h1>Written Tomatoes Reviews</h1>
        <ul class="wrap">${allReviews.join("")}</ul>
    `
    );

    response.send(html);
  });
}

module.exports = { get };
