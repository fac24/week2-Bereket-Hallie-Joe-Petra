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
        <p>${tomatoRating(review.rating)}</p>
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
  });
}

module.exports = { get };
