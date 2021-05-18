//----------------Make Board Objects----------------------
const boardItem = (place) => {
  let name = 'z';
  return{place, name}
}
const board = (() => {
  let stillPlay = true;
  //thing that holds the board values
  const values = [[boardItem(0),boardItem(1),boardItem(2)],[boardItem(3),boardItem(4),boardItem(5)],[boardItem(6),boardItem(7),boardItem(8)]];

  const printBoard = () => {
    console.log(values);
  }

  const write = (row, column, player) => {
    //console.log(values[row][column]);
    let thing = values[row][column].name;
    //console.log(thing);
    if (thing === 'x') {
      //console.log('blah');
    } else if (thing === 'o'){
      //console.log('blah');
    }
      else {
        if (stillPlay) {
          values[row][column].name = player;
          turn.whosTurn();
          winCheck('x');
          winCheck('o');
        }
    }
    board.deleteBoard();
    board.updateDisplay();

    //board.printBoard();
  }

  const updateDisplay = () => {
    //printBoard();
    for (let i = 0; i < 3; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      playBoard.appendChild(row);

      for (let z = 0; z < 3; z++) {
        const item = document.createElement('div');
        item.classList.add('item');

        let value = values[i][z].name;
        if (value === 'x') {
          item.classList.add('playerx');
        } else if (value === 'o') {
          item.classList.add('playero')
        } else {

        }

        item.addEventListener('click', () => {
          let data = turn.setTurnOutput();
          player = data.x
          //console.log(player);
          write(i,z,player);

        });
        row.appendChild(item);
      }
    }
  }

  const winCheck = (check) => {
    console.log('check: ' + check);
    console.log('values: ' + values[0][0].name + ' ' + values[0][1].name + ' ' + values[0][2].name);
    if (values[0][0].name === check && values[0][1].name === check && values[0][2].name === check) {
      endGame();
    } else if (values[1][0].name === check && values[1][1].name === check && values[1][2].name === check) {
      endGame();
    } else if (values[2][0].name === check && values[2][1].name === check && values[2][2].name === check) {
      endGame();
    } else if (values[0][0].name === check && values[1][0].name === check && values[2][0].name === check) {
      endGame();
    } else if (values[0][1].name === check && values[1][1].name === check && values[2][1].name === check) {
      endGame();
    } else if (values[0][2].name === check && values[1][2].name === check && values[2][2].name === check) {
      endGame();
    } else if (values[0][0].name === check && values[1][1].name === check && values[2][2].name === check) {
      endGame();
    }
  }

  const endGame = () => {
    stillPlay = false;
    console.log('Game Ended');
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

//console.log(board.values);

const playerFactory = (name, score) => {
  return {name, score};
}

const turn = (() => {
  const playerx = playerFactory('x',0);
  const playero = playerFactory('o',0);

  let counter = 0;

  const playerXTurn = () => {
    counter++;
  }
  const playerOTurn = () => {
    counter--;
  }
  let turnOutput;
  const whosTurn = () => {
    //console.log('whosturn ran');
    if (counter === 0) {
      turnOutput = playerx.name;
      playerXTurn();
      //sayCounter();
    } else if (counter === 1) {
      turnOutput = playero.name;
      playerOTurn();
      //sayCounter();
    } else {
      console.log('something went wrong');
    }
    return{turnOutput}
  }
  const sayTurnOutput = () => {
    console.log(turnOutput);
  }

  const setTurnOutput = () => {
    x = turnOutput;
    return{x}
  }
  return{whosTurn, sayTurnOutput, turnOutput, setTurnOutput}
})();


board.updateDisplay();
turn.whosTurn(); //Always have turn functions using turnOutput after this
//board.printBoard();
