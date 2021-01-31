
//-----------Have Read Input ---------------------

//Defining true and false radio buttons
const truRead = document.getElementById('true');
const flsRead = document.getElementById('false');

//Define variable to store boolean
let haveRead;

//true radio button click function
truRead.addEventListener('click', function(trueCount) {
  haveRead = true;
})
//false radio button click function
flsRead.addEventListener('click', function() {
  haveRead = false;
})

//---------------Book Input Data -------------

//Define the Books data inputs
const bookData = document.querySelectorAll("[data-input]");

//Event Listener to initiate clear function
bookData.forEach((input) =>
  input.addEventListener("click", () => clear(input))
);

//Clear function clears input boxes on click ;)
function clear(input) {
  input.value = '';
}

//---------------Add book Input Button -------------

//defining add book button
const inputData = document.querySelector('[data-write]');

//adding event listener to add book button
inputData.addEventListener('click', function() {
  //Pulls Current Book Information
  const addTitle = document.getElementById('add-book-title').value;
  const addAuthor = document.getElementById('add-author-name').value;
  const addPages = document.getElementById('add-book-pages').value;

  //--------Alert and Confirm
  //alert('Are you sure you want to want to add this book');

  //-----title: blah
  //-----Author: blah
  //-----etc

  //console.log('add title was ' + addTitle + ' at function go')

  //calling function to create new object
  const newBook = new Book(addTitle, addAuthor, Number(addPages), haveRead);
  //log new addition
  console.log(newBook.info());

  //newBook.sayTitle();
  //newBook.sayAuthor();
  //newBook.sayPages();
  //newBook.sayHaveRead();
});

//-------Making the Book Object --------------------

function Book (Title, Author, Pages, HaveRead)  {

  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.HaveRead = HaveRead;

  const str = Title + ' by ' + Author + ' has ' + Pages + ' pages. Have read? ' + HaveRead;

  this.info = function() {
    return (str);
  }

  this.sayTitle = function() {
    console.log('the title of the book is ' + Title);
  }
  this.sayAuthor = function() {
    console.log('the author of the book is ' + Author);
  }
  this.sayPages = function() {
    console.log('the pages of the book is ' + Pages);
  }
  this.sayHaveRead = function() {
    console.log('Have you read before? ' + HaveRead);
  }

  console.log('Book function ran');

  //Do I need to return if I'm just setting variable?
  //return(Title, Author, Pages, HaveRead)
}


//---------------------Search Function Code----------------------------


//Make constants Using query Selector
const searchData = document.querySelector('[data-search]');
const searchSelector = document.querySelectorAll('.search-selector');

//Event Listener of Search By Buttons to search SelectFunction
searchSelector.forEach((selector) =>
  selector.addEventListener('click', () => searchSelect(selector.name))
);

function searchSelect(selector) {
  console.log('Selector was ' + selector +' at searchSelect.');
  //const selection =
  selector.classList.add('clicked-button')
}

function search(searchSelector, searchData) {
  console.log("selector is " + searchSelector + ' at search function start');
  console.log("data is " + searchData + ' at search function start');
}
