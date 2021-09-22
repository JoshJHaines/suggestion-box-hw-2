# A-Suggestion-Box-HW

Assignment following MongoDB Intro Lessons. Due September 27, 2021

## Requirements

* [Node](https://nodejs.org/en/download/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [GitHub](https://www.github.com)
* [Express](https://expressjs.com/)
* [Express_Generator](https://www.npmjs.com/package/express-generator/)
* [Morgan](https://www.npmjs.com/package/morgan)
* [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
* [Mongoose](https://mongoosejs.com/)


## Overview
Mongo Express Node suggestion-box-hw

Use Postman and Robo 3T to test your routes
Use MongoDB and Mongoose and name database suggestion-hw
Use Async and Await (Don't forget the try and catch block)
Use controllers for business logic.
- [x] Remember to be inside folder and npm i*
- [x] Only .gitignore the node_modules



## Instructions

### Create Server
- [x] Create an express server using express-generator: 
  - [x] express suggestion-box-hw --view=ejs
  - [x] Delete all view related items

### Connect Database
- [x] Connect to mongodb with mongoose. 
  - [x] Remember to name database suggestion-hw.
  
### Create Routes 
- [x] In routes folder create a suggestions folder
  - [x] Then create suggestionRouter.js inside suggestion folder
    - [x] Make sure you connect it through app.js with the path '/api/suggestions'
  - [x] In suggestion folder, 
    - [x] Create model folder
    - [x] Controller folder.

### Create Data Models
- [x] In model folder, 
  - [x] create a file called Suggestion.js: 
    - [x] Build a schema for Suggestions called SuggestionSchema
      - [x] Title 
        - [x] string
        - [x] lowercase
        - [x] unique
        - [x] required
      - [x] Author
        - [x] string
        - [x] lowercase
      - [x] Suggestion
        - [x] string
        - [x] lowercase
        - [x] required
      - [x] Likes
        - [x] number
        - [x] default to 0
      - [x] Anonymous
        - [x] boolean
      - [x] TimeCreated
        - [x] date with default Date.now

### Build Controllers
- [x] create a file called suggestionController.js
- [x] getAllSuggestions
- [x] getSingleSuggestion
- [x] get one suggestion based on id using parameters
- [x] createSuggestion- does not need id or time from user
- [ ] updateSuggestion- user can only update title and suggestion
- [x] deleteSuggestion - suggestion deletes based on id

### Use Postman Routes
- [ ] Hook it up to suggestionRouter.js
  - [x] GET /all-suggestions
  - [x] GET /single-suggestion
  - [x] POST /create-suggestion
  - [ ] UPDATE /update-suggestion
  - [x] DELETE /delete-suggestion

## Extra Credit
- [ ] Make a GET /by-author-suggestion using query
- [ ] getSuggestionsByAuthor- if i query a author's name i should get a list of their suggestions

### Hint:
in url www.shop.com/products/?item=shoes
in code req.query.item equals shoes