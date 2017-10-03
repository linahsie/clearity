# MP #2: New Clear REACTive App
### Due: October 9th, 2017, 11.59PM CDT

## Table of Contents
1. [Assignment](#assignment)
2. [Grading Breakdown](#grading-breakdown)
3. [Tips](#tips)
4. [Rules](#rules)
5. [Environment Setup Guide](#environment-setup-guide)
6. [Submission Details](#submission-details)

## Assignment

#### Task
In this programming assignment, you will implement a front-end interface using React that consumes an API. Please read through the entire MP before you start.

Here is a video demo for a [sample application](https://youtu.be/DmDZuAr7QJE).

#### Requirements
Create a single-page React app that lets users interact with the data from one of the following APIs. 
  - TMDB (https://www.themoviedb.org/documentation/api)
  - Spotify (https://developer.spotify.com/web-api/)
  - Pokemon (https://pokeapi.co/)
Note that you may need to create an account and/or acquire an API key for some of the APIs. 

Your app should have the following features:
  - **A list view**:  where users can input a search query and the app returns a list of results that match the query (i.e. searching movies or albums). There should also be a way to sort the search results based on different properties of the results (such as the name or rank) and of specifying an ordering (ascending and descending). Also, the search bar should filter as you type. You can sort and filter in the client side.
  - **A gallery view**: that displays some kind of image media from the chosen API (gallery of movie posters). The gallery view should also have some kind filtering attribute where users can select one or many attributes and filter the gallery by them (i.e. genres of films or music). 
  -  **A detail view**: When an item in the search view or the gallery view is clicked, the app should display the different attributes of the selected item. Also, this view should have previous and next buttons (can be implemented with arrows) that lets the user cycle through the list of objects.
  
You will also be required to use following tools:
  - Use <code>react-router-dom</code> for routing.
  - Use <code>Axios</code> for API calls.
  - Use <code>SemanticUI</code> for frontend design
  - Use <code>PropTypes</code> for relevant components. https://facebook.github.io/react/docs/typechecking-with-proptypes.html

## Grading Breakdown
Total Points : 50

List View:
  - Does the list view display relevant items from the chosen API ? (2 points)
  - Does the search bar filter down the items based on the search? (4 points)
  - Can you sort by at least 2 properties?  (4 points)
  - Can the sorting be done in Ascending and Descending order?  (4 points)

Gallery View:
  - Is the gallery composed of item media?  (2 points)
  - Does clicking on a filter change the results?  (4 points)

Details View:
  - Does clicking on an item in List View take you to the Details View?  (5 points)
  - Does clicking on an item in Gallery View take you to the Details View?  (5 points)
  - Does the Details View contain item details?  (4 points)
  - Does the PREVIOUS and NEXT buttons work correctly?  (5 points)

Other:
  - Does the implementation use React Router and PropTypes?  (6 points)
  - Design (5 points)

## Tips
  - Start early! This is first MP that uses React so start ahead.
  - Please DO NOT delete the gitignore file from the project

## Rules
1. This is an individual assignment. No collaboration is permitted.
2. It is not permitted to copy/paste code that is not your own. You are, however, free to look at different code sources for inspiration and clarity. All sources (code as well as reading material) that you reference to complete this assignment must be declared in the submission.
3. There should be no use of inline styling.
4. No inline script tags should be used.
5. HTML tables cannot be used for layout.
6. If you think something you’re doing might not be acceptable, please ask on Piazza.
7. You must utilize some SCSS features (variables, mixins, etc). A plain CSS file will receive less points.

## Environment Setup Guide
1. Clone the repository:
`git clone https://github.com/uiuc-web-programming/mp2_starter_17.git mp2`, then `cd mp2`
2. Install dependencies:
`npm install`
3. Run the dev server:
`npm run dev`
4. Open a browser and go to `http://localhost:8080/` to view your page. You should see "Welcome to MP2!".
5. Open up `source/index.js` and `source/html/index.html` and read the comments in those files to get an idea of how to start. *We will not answer questions that are already answered by the comments there.*

## Submission Details
[Submission Form](https://docs.google.com/forms/d/e/1FAIpQLSfFhk_QzJJ1fRn4WV3_hdCwpnTWTyMKBRqFll_AsTHNqGQlMQ/viewform?usp=sf_link)
