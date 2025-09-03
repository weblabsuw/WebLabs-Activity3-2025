/*****************************************************************************
 * Challenge 1: Review the provided code, which includes:
 * -> Statements that import data from courses.js
 * -> A function that deletes all child elements from a parent element in a DOM
*/

// import the JSON courses data from the courses.js file  
import COURSES_DATA from './courses.js';

// create a list of objects to store the courses data using JSON.parse
const COURSES_JSON = JSON.parse(COURSES_DATA);

// removes all child elements from a parent element in the DOM
function deleteChildElements(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

/*****************************************************************************
 * Challenge 2: Add data about each course as a card to the courses-container
 * New topics: DOM manipulation, for loops, template literals, functions, 
 * if statements
*/

// grab the element with the id courses-container

// create a function that adds all data from the courses array to the page
function addCoursesToPage(courses) {
    
    // loop over each item in the data

        // create a new div element, which will become the course card
        
        // add the class course-card to the list
		
				// declare a new variable and check if the course's type is an array 
				// and needs commas
		
				// set the inner HTML using a template literal to display the info from
				// the courses data

        // append the course to the courses-container

}

// call the function we just defined using the correct variable

/*****************************************************************************
 * Challenge 3: Create the statistics summary at the top of the page
 * New topics: arrow functions, reduce
*/

// grab the number of courses card element and find the total number of courses

// set its inner HTML using a template literal

// grab the total enrolled card element

// use reduce() to count the number of people enrolled by summing them

// set the inner HTML using a template literal and toLocaleString to get a number with commas

// do the same with the total waitlisted card

/*****************************************************************************
 * Challenge 4: Add functions to filter the open and closed courses 
 * New topics: filter
*/

// grab the element with the id num-displayed-container

// create a variable to showcase the number of courses currently displayed 

function updateNumberDisplayed() {
		// clear the container first

		// create the element to hold the number of courses displayed and 
		// edit its text content
		
		// append element to the container
}

function filterOpenCoursesOnly() {
		// use filter() to get a list of courses that are open (amount enrolled is less 
		// than the amount of seats)
	
		// update the displayed number of courses 

    // use the function we previously created to add the open courses to the DOM

}

function filterClosedCoursesOnly() {
    // use filter() to get a list of courses that have no seats left

    // use the function we previously created to add the closed courses to the DOM

}

// do for the rest of the button options
function filterBioCoursesOnly() {

}

function filterHumanitiesCoursesOnly() {

}

function filterLitCoursesOnly() {

}

function filterNaturalCoursesOnly() {

}

function filterPhysicalCoursesOnly() {

}

function filterSocialCoursesOnly() {

}

function filterCommACoursesOnly() {

}

function filterCommBCoursesOnly() {

}

function filterQuanACoursesOnly() {

}

function filterQuanBCoursesOnly() {

}

function filterEthnicCoursesOnly() {

}

function filterAllCourses() {

}

// select each button in the "Courses" section

// add event listeners with the correct functions to each button

/*****************************************************************************
 * Challenge 5: Add more information about the courses on their cards
 * New topics: ternary operator
*/

// make a new function to change the background color depending on the course's
// availability

// add your new function to the addCoursesToPage function from Challenge 2 to 
// change the course cards' background colors

// with your newfound knowledge, change the if statement in the 
// addCoursesToPage function to use a ternary operator instead

// BONUS: use the ternary operator to display "credit" if the course is one 
// credit, otherwise display "credits" 
/*****************************************************************************
 * Challenge 6: Select and display the top 2 most signed up courses
 * New topics: spread operator, destructuring, sort
*/

// grab both containers of the top 2 most signed up courses cards

// sort the courses in descending order of the sum of enrolled and waitlisted 
// students using a copy of COURSES_JSON

// use destructuring and the spread operator to grab the first and second courses

// create a new element to hold the name of the most signed up course, then append it to the correct element

// do the same for the second most signed up course

