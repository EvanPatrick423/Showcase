
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


});

//-------Making the Book Object --------------------

function Book (Title, Author, Pages, HaveRead)  {

  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.HaveRead = HaveRead;

  const str = Title + ' by ' + Author + ' has ' + Pages + ' pages. Have I read? ' + HaveRead;

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


//Event Listener of Search-By Buttons
searchSelector.forEach((selector) =>
  selector.addEventListener('click', () => searchSelect(selector)
));
//Event Listener on the search button
searchData.addEventListener('click', () =>search(haveRead))

function searchSelect(selector) {
  clearSearchSelect();

  console.log('Selector was ' + selector.name +' at searchSelect');
  //const selection =
  selector.classList.add('clicked-button');
}

function clearSearchSelect() {
  searchSelector.forEach((selector) =>
  selector.classList.remove('clicked-button'))
}

function search(haveRead) {
  //Grabbing needed Info to start search
  const searchSelected = document.querySelector('.clicked-button');
  //title, author, pages, and haveRead
  const searchTitle = document.getElementById('add-book-title');
  const searchAuthor = document.getElementById('add-author-name');
  const searchPages = document.getElementById('add-book-pages');
  const searchHaveRead =  document.getElementById('add-have-read');

  console.log('searchHaveRead was ' + searchHaveRead.id + ' at search function');
  console.log("searchSelected is " + searchSelected.name + ' at search function start');

  //console.log('searchTitle name is ' + searchTitle.name)
  if (searchSelected.name === searchTitle.name) {
    console.log('searchSelected === searchTitle');

  } else if (searchSelected.name === searchAuthor.name) {
    console.log('searchSelected === searchAuthor');

  } else if (searchSelected.name === searchPages.name) {
    console.log('searchSelected === searchPages');

  } else if (searchSelected.name === searchHaveRead.id) {
    console.log('searchSelected === searchHaveRead');

  } else {
    console.log('there was a problem matching the item to search');
  }
}
