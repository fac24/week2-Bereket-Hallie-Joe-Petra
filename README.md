# 🍅 Written Tomatoes: book ratings & reviews 📖

## FAC24 week 2 project: Bereket, Hallie, Joe, Petra

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
