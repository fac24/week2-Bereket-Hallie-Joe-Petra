BEGIN;

DROP TABLE IF EXISTS  reviews CASCADE;

CREATE TABLE reviews ( 
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  textcontent TEXT,
  rating INTEGER
);

INSERT INTO reviews (username, title, author, textcontent, rating) VALUES (
  'Hallie', 'Javascript & Jquery', 'Jon Duckett', 'Amazing book!', 5
),
(
  'Joe', 'The Art of Computer Programming', 'Don Knuth', 'A mess. Avoid!', 1
),
(
  'Bereket', 'Eloquent Javascript', 'Marjn Haverbeke', 'Brilliant book!', 5
);

COMMIT;