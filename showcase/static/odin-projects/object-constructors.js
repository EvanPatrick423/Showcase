//--------- Setting up the Library array ----------

let library = JSON.parse(localStorage.getItem('localLibrary'));

if (library === null) {
  library = [];
  //console.log(library);
}

 /*
for (x=0; x<library.length; x++) {
  console.log(library[x]);
}
 */


//--------- Add Current Book to Library array ----------
function addToLibrary (newBook) {
  console.log(newBook);
  console.log('library is ' + library + ' at addToLibrary function');
  library.push(newBook);

  if(storageAvailable('localStorage')) {
    localStorage.setItem('localLibrary', JSON.stringify(library));
  }

}

//------------ Clear Local Storage Function -----------
clearStored = document.getElementById('storage-clear');

clearStored.addEventListener('click', () => localStorage.clear());

//------------ Can Use Local Storage Function -----------
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
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

  //Alert and Confirm  [to do]
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

  //console.log('Selector was ' + selector.name +' at searchSelect function');

  selector.classList.add('clicked-button');
}

function clearSearchSelect() {
  searchSelector.forEach((selector) =>
  selector.classList.remove('clicked-button'))
}

function search(haveRead) {
  //Grabbing needed Info to start search

  const searchSelected = document.querySelector('.clicked-button'); //which search field is selected?

  //title, author, pages, and haveRead values respectiveley
  const searchTitle = document.getElementById('add-book-title');
  const searchAuthor = document.getElementById('add-author-name');
  const searchPages = document.getElementById('add-book-pages');
  const searchHaveRead = document.getElementById('add-have-read')
  //need to look at one before you play with it?
  //remember to find the exact property you need using . notation or []

  //console.log("searchSelected is " + searchSelected + ' at search function start');
  //console.log('searchTitle is ' + searchTitle + ' at search function start')
  //console.log('searchAuthor is ' + searchAuthor + ' at search function start')
  //console.log('searchPages is ' + searchPages + ' at search function start')
  console.log('searchHaveRead was ' + haveRead + ' at search function start');



  if (searchSelected.name === searchTitle.name) {
    console.log('Searched for title');
    for (x = 0; x < library.length; x++) {
      if (searchTitle.value === library[x].title) {
        console.log('matched library item ' + x + "'s title. Its " + library[x].title);
      } else {
        console.log('not a match match, title');
      }
    }
  } else if (searchSelected.name === searchAuthor.name) {
    console.log('Searched for author');
    for (x = 0; x < library.length; x++) {
      if (searchAuthor.value === library[x].author) {
        console.log('matched library item ' + x + "'s author. It's " + library[x].author);
      } else {
        console.log('not a match, author');
      }
    }
  } else if (searchSelected.name === searchPages.name) {

    console.log('Searched for pages');
    //console.log(searchPages.value)
    for (x = 0; x < library.length; x++) {
      //console.log(library[x].pages);
      if (Number(searchPages.value) === library[x].pages) {
        console.log('matched library item ' + x + "'s page number. It's " + library[x].pages);
      } else {
        console.log('not a match, pages');
      }
    }
  } else if (searchSelected.name === searchHaveRead.id) {
    console.log('Searched for have read');
    for (x = 0; x < library.length; x++) {

      if (haveRead === library[x].haveRead) {
        console.log('matched library item ' + x + "'s title is " + library[x].title);
      } else {
        console.log('not a match, haveRead');
      }
    }
  } else {
    console.log('there was a problem matching the item to search');
  }

}

//----------- Match function -----------------------------------
function match(book) {
  console.log('book in match function is ' + book)
}
