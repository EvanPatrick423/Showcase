//--------- Setting up the Library array ----------
let library = [];

//--------- Add Current Book to Library array ----------
function addToLibrary (newBook) {
  console.log(newBook)
  library.push(newBook);
  console.log('library is ' + library + ' after new book addtion');
}


//--------------- Add book Input Button -------------

//defining add book button
const inputData = document.querySelector('[data-write]');

//adding event listener to add book button
inputData.addEventListener('click', function() {
  //Pulls Current Book Information
  const addTitle = document.getElementById('add-book-title').value;
  const addAuthor = document.getElementById('add-author-name').value;
  const addPages = document.getElementById('add-book-pages').value;

  //Alert and Confirm
  //alert('Are you sure you want to want to add this book');

  //-----title: blah
  //-----Author: blah
  //-----etc

  //calling function to create new object
  const newBook = new Book(addTitle, addAuthor, Number(addPages), haveRead);
  //log new addition
  console.log(newBook.info());

  addToLibrary(newBook);

});

//------- Making the Book Object --------------------

function Book (Title, Author, Pages, HaveRead)  {

  this.title = Title;
  this.author = Author;
  this.pages = Pages;
  this.haveRead = HaveRead;

  const str = 'the book is titled ' + Title + ' written by ' + Author + ', has ' + Pages + ' pages. Have I read? ' + HaveRead;

  this.info = function() {
    return (str);
  }

  console.log('Book function ran');

  //Do I need to return if I'm just setting variable?
  //return(Title, Author, Pages, HaveRead)
}

//--------------- Book Input Data Boxes -------------

//Define the Books data inputs
const bookData = document.querySelectorAll("[data-input]");

//Event Listener to initiate clear function
bookData.forEach((input) =>
  input.addEventListener("click", () => clear(input))
);

//Clear function clears input boxes on click ;)
function clear(input) {
  if (input.classList.contains('used')) return
  else {
    input.classList.add('used');
    input.value = '';
  }

}

//----------- Have Read Input Field ---------------------

//Defining true and false radio buttons
const truRead = document.getElementById('true');
const flsRead = document.getElementById('false');

//Define variable to store boolean
let haveRead;



//true radio button click function
truRead.addEventListener('click', function() {
  haveRead = true;
})
//false radio button click function
flsRead.addEventListener('click', function() {
  haveRead = false;
})



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
    console.log('Searched for title');
    console.log('searchTitle value is ' + searchTitle.value);
    for (x = 0; x < library.length; x++) {
      console.log('library item title is ' + library[x].title);
    }


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

//----------- Match function -----------------------------------
function match(book) {
  console.log('book in match function is ' + book)
}
