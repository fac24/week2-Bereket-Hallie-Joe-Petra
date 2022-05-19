const db = require("../database/connection.js");
const layout = require("../layout.js");

function get(request, response) {
  const html = layout(
    "Write a book review | Written Tomatoes",
    `<div>
        <form method="POST">

            <label for="username">Username</label>
            <input name="username" type="text" aria-label="Insert your name here" required>

            <label for="book_title">Book Title</label>
            <input name="title" type="text" aria-label="Insert Book Title here" required>
        
            <label for="book_author">Book Author</label>
            <input name="author" type="text" aria-label="Insert Book Author here" required>
        
            <label for="book_review">Book Review</label>
            <textarea name="textcontent" rows="4" cols="50" required></textarea>

            <p>Book Rating</p>
            <div>
                <input type="radio" 
                name="rating" value="1">
                <label for="rating-1">1</label>

                <input type="radio"
                name="rating" value="2">
                <label for="rating-2">2</label>

                 <input type="radio" 
                name="rating" value="3">
                <label for="rating-3">3</label>

                <input type="radio" 
                name="rating" value="4">
                <label for="rating-4">4</label>

                <input type="radio" 
                name="rating" value="5">
                <label for="rating-5">5</label>
            </div>
            <button type="submit">Add Review</button>
        </form>
        </div>
        `
  );
  response.send(html);
}

function post(request, response) {
  let newReview = request.body;
  console.log(newReview.username, newReview.title);
  db.query(
    "INSERT INTO reviews (username, title, author, rating, textcontent) VALUES ($1, $2, $3, $4, $5)",
    [
      newReview.username,
      newReview.title,
      newReview.author,
      newReview.rating,
      newReview.textcontent,
    ]
  ).then(() => {
    response.redirect("/");
  });
}

module.exports = { get, post };
