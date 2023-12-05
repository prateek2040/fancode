## Project Title

Movie Flix
## Demo Link

access this site on : https://movieflixfancode.netlify.app/
## About 

this project is made as part of take home assignment for Fancode FE hiring challenge
## Requirements Covered

## Layout And UI
○ Created custom UI components for the app, using React
○ Displayed a list of movies sorted in descending order of popularity.
○ Show the movie title, image, genre, cast, director, and a short description related
to the movie in each information card.
○ have added an additional feature for displaying a readmore button if a user wants to read full description

● Default page load state
○ Loaded a total of only 20 movies for each year 
○ By default, when a user lands on the page, display a list of movies of the year
2012
○ Implemented smooth scrolling behavior to load more movies as the user scrolls in
any direction i.e load movies of previous year when user scrolls up and load
movies of next year when user scrolls down until the current year.
○ As and when the user scrolls and movies are added to the list, make sure that
this interaction is smooth and doesn’t cause any jitters.

## genre Filter
○ Provided a filter UI that allows users to filter movies by genre.
○ Fetched genres from API and show genres as filters
○ When a user selects one or more genres, the list  only displays movies of
the selected genres.

## Bonus(Optional) Covered
○ Ensured smooth scrolling even when more and more movies are loaded in the
DOM.
○ Implemented a search bar which searches for the movie based on the search string
and displays an infinite loading list of movies which matches the search.

## Bonus(Optional) Not Covered
○ Implement this project in React Native instead of a web app 
○ Use TypeScript for enhanced type safety and code quality.




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.




### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
