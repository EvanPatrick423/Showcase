//--------   Board logic   ---------------
const board = (() => {
  //thing that holds the board values
  const values = [[0,1,2],[3,4,5],[6,7,'o']];





  const printBoard = () => {
    console.log(values);
  }

  const write = (row, column, player) => {
    //console.log(values[row][column]);
    values[row][column] = player;
    //console.log(values[row][column]);
    board.deleteBoard();
    board.updateDisplay();
  }

  const updateDisplay = () => {
    printBoard();
    for (let i = 0; i < 3; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      playBoard.appendChild(row);

      for (let z = 0; z < 3; z++) {
        const item = document.createElement('div');
        item.classList.add('item');

        let value = values[i][z];
        if (value === 'x') {
          item.classList.add('playerx');
        } else if (value === 'o') {
          item.classList.add('playero')
        } else {

        }

        let player = 'x';
        item.addEventListener('click', () => {
          console.log('event trigger fired ' + player)
          write(i,z,player);
        });
        row.appendChild(item);
      }
    }
  }

  const deleteBoard = () => {
    const toDelete = document.querySelector('#playBoard')
    while (toDelete.firstChild) {
      toDelete.removeEventListener('click', () => {
        write(i,z,player);
      });
      toDelete.removeChild(playBoard.lastChild);
    }
  }


  return{printBoard, write, updateDisplay, deleteBoard};
})();

const turn =(() => {

});


board.write(0,0,'x');
//board.printBoard();
