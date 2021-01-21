//-----Set up needed Variables
const calcButtons = document.querySelectorAll(".button");
console.log(calcButtons);

//-----operation functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function factorial(a) {
	if (a == 0) return 1;
	let product = 1;
	for (let i = a; i > 0; i--) {
	  product *= i;
	}
	return product;
}

function exponent(a, b) {
	return Math.pow(a, b);
}

//------------------------------------------------------------
//------Display numbers when typing
function collect(x) {
  //console.log(x);
  let displayText = document.getElementById('displaycurrent').textContent;
  switch(x) {
    case '0':
        displayText = displayText + '0';
        break;
    case '1':
          displayText = displayText + '1';
          break;
    case '2':
          displayText = displayText + '2';
          break;
    case '3':
          displayText = displayText + '3';
          break;
    case '4':
          displayText = displayText + '4';
          break;
    case '5':
          displayText = displayText + '5';
          break;
    case '6':
          displayText = displayText + '6';
          break;
    case '7':
          displayText = displayText + '7';
          break;
    case '8':
          displayText = displayText + '8';
          break;
    case '9':
          displayText = displayText + '9';
          break;
    case 'decimal':
          if (displayText.length === 0){
            displayText = displayText + '0.'
          } else {
            displayText = displayText + '.';
          }
          break;
    case 'plus':
          displayText = displayText + ' + ';
          break;
    case 'minus':
          displayText = displayText + ' - ';
          break;
    case 'multiply':
          displayText = displayText + ' * ';
          break;
    case 'divide':
          displayText = displayText + ' / ';
          break;
    case 'clear':
          displayText = '';
          break;
  }
  displaycurrent.textContent = displayText;
}



//------Blank Object to use in math

const object = {
  name: 'dude',
  height: '5ft',
}
console.log(object.name)

//------Add event listeners to buttons
calcButtons.forEach(button => button.addEventListener('click', function() {
  collect(button['id']);
}))
