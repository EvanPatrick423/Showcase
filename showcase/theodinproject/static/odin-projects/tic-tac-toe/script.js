//--------   Board logic   ---------------
const board = (() => {
  //arrays for the rows of the tic tac toe board
  const row0 = [2,2,2];
  const row1 = [2,2,2];
  const row2 = [2,2,2];





  const printBoard = () => {
    console.log('row0 ' + row0);
    console.log('row1 ' + row1);
    console.log('row2 ' + row2);
  }

  const write = (row, column, player) => {
      if (row === 0){
        //console.log('ding at 0');
        row0[column] = player;
      } else if (row === 1) {
        //console.log('ding at 1');
        row1[column] = player;
      } else if (row === 2) {
        row2[column] = player;
      } else {
        console.log('there was an error at the write function');
      }
      board.updateDisplay();
  }

  const updateDisplay = () => {
    for (let i = 0; i < 3; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      playBoard.appendChild(row);

      for (let z = 0; z < 3; z++) {
        const item = document.createElement('div');
        item.classList.add('item');
        let idstring = 'ID' + i + z;
        //console.log(idstring);
        item.classList.add(idstring);
        item.addEventListener('click', () => {
          changeSymbol(idstring);
        })
        row.appendChild(item);
      }
    }
  }

  const changeSymbol = (id) => {
    //console.log(id);
    let querySelect = '.' + id;
    console.log(querySelect);
    let div = document.querySelector(querySelect);
    console.log(div);
    div.classList.add("clicked");
  }



  return{printBoard, write, updateDisplay, changeSymbol};
})();


//board.printBoard();
board.write(0,0,'x');
