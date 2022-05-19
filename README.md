# 🍅 Written Tomatoes: book ratings & reviews 📖

## FAC24 week 2 project: Bereket, Hallie, Joe, Petra

### How to use

- Try the deployed app on Heroku here: https://writtentomato.herokuapp.com/

### How to run in your dev environment

- ``git clone https://github.com/fac24/week2-Bereket-Hallie-Joe-Petra.git``
- ``npm install``
  - (Make sure you're on a good Internet connection, cos it might install Cypress!) 🤗
- Make your own Heroku Postgres server! :D
  - Copy the database URI from the relevant Settings page.
- Make a file called ``.env`` in the cloned git repo folder.
  - (We haven't got a script to do this for you yet, sorry.)
  - Set the contents of that file to: ``DATABASE_URL='[the postgres:// link you copied above]'``
- (etc., to be completed!)

### Database schema

Table: ``reviews``

| column name | type | nullable | primary key | notes |
| - | - | - | - | - |
| **id** | integer (serial) | not null | primary key ||
| **username** | varchar(255) | not null || Name of user submitting the review |
| **title** | varchar(255) | not null || Title of book |
| **author** | varchar(255) | not null || Author of book |
| **textcontent** | text ||| Review text |
| **rating** | integer ||| How many 🍅/5? |
