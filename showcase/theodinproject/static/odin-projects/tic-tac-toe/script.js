//--------   Board logic   ---------------
const board = (() => {
  //thing that holds the board values
  const values = [[0,1,2],[3,4,5],[6,7,8]];
  const printBoard = () => {
    console.log(values);
  }

  const write = (row, column, player) => {
    console.log(values[row][column]);
    let thing = values[row][column];
    if (thing === 'x') {
      console.log('blah');
    } else if (thing === 'o'){
      console.log('blah');
    }
      else {
      console.log('thing');
      values[row][column] = player;
      //console.log(values[row][column]);
      board.deleteBoard();
      board.updateDisplay();
    }

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

        let value = values[i][z];
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
          turn.whosTurn();
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
  return{printBoard, write, updateDisplay, deleteBoard, values};
})();

//console.log(board.values);

const playerFactory = (name, score) => {
  const thing = name + score
  //console.log(thing);
  return {name, score, thing};
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


  const sayCounter = () => {console.log('counter is ' + counter);}
  const sayHello = () => {console.log('say hello');}
  const sayPlayerx = () => {console.log(playerx);}
  return{whosTurn, sayTurnOutput, turnOutput, setTurnOutput}
})();

let x;

board.updateDisplay();
turn.whosTurn(); //Always have turn functions using turnOutput after this
//turn.sayTurnOutput();
turn.setTurnOutput(x);
//console.log(turn.turnOutput);
//board.write(0,0,'x');
//board.printBoard();
