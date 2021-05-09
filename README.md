# The Shoppies

This project uses OMDB api to display movies based on the search terms for title. It is made with React without any extra libraries except the ones that come with create-react-app.

# Usage

The users can search for movies and nominate or denomiate them to create a list of 5 movies. These movies are also stored in the localStorage to give a more continuous user experience the next time they visit the page. The nominees appear below the navbar with the title-year information being displayed and an option to denominate them. The user can also clear all nominations with a single button from the top-right corner of the navbar.

# Api

The core concept of this app is to utilize api calls to present interactive data. The calls are made by JavaScript built-in function fect api and are wrapped in a try-catch block to handle errors. The users are also prevented from making empty requests and the app checks the response integrity before displaying the results on the page. Therefore, even the errors avoiding the catch block are being handled. The app makes two different api calls: one for a title search and one for a specific movie details.

From Create React App's documentation, it is known that enviroment variables are embedded into the build, meaning anyone can view them by inspecting the app's files. As this was not for production, and to keep the app simple, the enviroment variables were treated as if they were being used in the server side.

# Further Development

The app uses the useState hook to manage application state and passing props between components to keep track of data. With more features embedded, moving to a state management library or useContext and useReducer hooks combined with a custom API call hook might be considered.
