const db = require("../database/connection.js");
const layout = require("../layout.js");

function get(request, response) {
  const html = layout(
    "Write a book review | Written Tomatoes",
    `
    <h1>Write a review!</h1>
    <div id="form-container">
        <form method="POST" id="form">
            <div id="column1">

            <label for="book_title" class="form-label">Book Title</label>
            <input name="title" type="text"  class="form-input" aria-label="Insert Book Title here" required>
        
            <label for="book_author" class="form-label">Book Author</label>
            <input name="author" type="text"  class="form-input" aria-label="Insert Book Author here" required>

            <label for="username" class="form-label">Username</label>
            <input name="username" type="text" class="form-input" aria-label="Insert your name here" required>
            </div>

      
          
            <div id="column2">

            <p class="rating-label">Rating</p>
            <div id="rating-tomatoes">
              <div>
                <input type="radio" 
                name="rating" value="1" >
                <label for="rating-1">🍅</label>
                </div>
                
                <div>
                <input type="radio"
                name="rating" value="2">
                <label for="rating-2">🍅 🍅</label>
                </div>
            
                <div>
                 <input type="radio" 
                name="rating" value="3">
                <label for="rating-3">🍅 🍅 🍅</label>
                </div>

                <div>
                <input type="radio" 
                name="rating" value="4">
                <label for="rating-4">🍅 🍅 🍅 🍅</label>
                </div>

                <div>
                <input type="radio" 
                name="rating" value="5">
                <label for="rating-5">🍅 🍅 🍅 🍅 🍅</label>
                </div>
            </div>

            <label for="book_review" class="rating-label">Review</label>
            <textarea name="textcontent"  id="review-text" required></textarea>

            <button type="submit" id="submit-btn">Add Review</button>
            </div>
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
