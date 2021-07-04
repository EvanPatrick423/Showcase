//how to make search loop that searches for items when not complete matches

//take string of library item (title, author, etc), then take string of search input
  //for (i=0; i < Librarystring.length; i ++) compare string thing to library thing
    //if match, look to thing next to it and compare
    //see how long it goes
    //return match of one library item with longest match length (most accurate search)
    //return all of the longest in item matches

//way to return variable safely
  //have the actual variable stored inside the function
  //then set a holder variable to that actual variable everytime you need to output data
    //if someone tries to change output variable it doesnt matter as long as you set
    //the program to equal the holder to the actual everytime you want to retrive data


//==============================================================================

const library = (() => {
  let database = JSON.parse(localStorage.getItem('localLibrary'));

  if (database === null) {
    database = [];
    //console.log(library);
  }

  //Add to library function
  const addToLibrary = (newbook) => {
    database.push(newbook)

    if(storageAvailable('localStorage')) {
      localStorage.setItem('localLibrary', JSON.stringify(database));
    }

  }

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

  //initate variables
  haveRead = false;

  //make true value from haveRead button
  function haveIRead () {
    console.log('haveIRead ran');
    if(haveRead === false){
      haveRead = true;
      truRead.classList.add('clicked-button');
      console.log(haveRead);
    } else if (haveRead === true) {
      haveRead = false;
      truRead.classList.remove('clicked-button');
      console.log(haveRead);
    } else {
      console.log('Something messed up at the HaveIRead function');
    }
  }

  //Finds Add book Button
  const inputData = document.querySelector('[data-write]');

  //When add button clicked, do this
  inputData.addEventListener('click', function() {
    //Pulls Current Book Information
    const addTitle = document.getElementById('add-book-title').value;
    const addAuthor = document.getElementById('add-author-name').value;
    const addPages = document.getElementById('add-book-pages').value;
    const truRead = document.getElementById('truRead');



  });

    //making the book object using class method
    class Book {
      constructor (addTitle, addAuthor, addPages,) {
        this.title = addTitle;
        this.author = addAuthor;
        this.pages = addPages;
      }

      sayInfo () {
        console.log(this.title);
        console.log(this.author);
        console.log(this.pages);
      }
    }



})();
