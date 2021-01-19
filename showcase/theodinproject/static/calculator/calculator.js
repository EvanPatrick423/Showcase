//operate function
//needs to call an object that stores the operand data and the numbers while also diplaying them in sequential order in calculator display
function operate(operand, number1, number2) {
  let result;
  if (operand = "*") {
    result = number1 * number2;
  } else if (operand = "+") {
    result = number1 + number2;
  } else if (operand = "-") {
    result = number1 - number2;
  } else if (operand = "%") {
    result = number1 / number2;
  } else {
    console.log("there was an error at the if statement of the operate function");
  }
return result}
