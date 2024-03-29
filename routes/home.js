const db = require("../database/connection.js");
const layout = require("../layout.js");

function tomatoRating(rating) {
  let returnString = "";
  for (let i = 0; i < rating; i++) {
    returnString += "🍅";
  }
  return returnString;
}

function get(request, response) {
  db.query("SELECT * FROM reviews")
    .then((result) => {
      const reviewsObjects = result.rows;
      const allReviews = reviewsObjects.map((review) => {
        return `
      <li class ="review">
      <div class ="username">
        <p class="name">${review.username}</p>


            <div class ="head_post" >
              <h2>${review.title}</h2>
              <h3>${review.author}</h3>
              <div>${tomatoRating(review.rating)}</div>
            </div>

      </div>
            <div class ="book_feedback">
              <p>${review.textcontent}</p>
            </div>
      
      </li>
      `;
      });
      const html = layout(
        "Written Tomatoes",
        `
        <h1>Written Tomatoes Reviews</h1>

        <ul class="wrap">${allReviews.join("")}</ul>
        <a href="/write-review">Write a new review</a>

    `
      );

      response.send(html);
    })
    .catch((error) => {
      // Catch any DB errors so the server doesn't crash.
      // Users probably can't affect the SELECT query above, so this is more about general
      // safeguarding against some unexpected DB problem, or our own coding mistakes
      // (e.g. "SELECT * FROM blah", where the "blah" table doesn't exist).
      console.error(error);
      response.send("<h1>Sorry, there was an error</h1>");
    });
}

module.exports = { get };
