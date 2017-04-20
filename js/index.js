$('.buttons').on('click', buttonInput);
var screen = $('#screen');

function buttonInput(event) {
  if (event.target.id === 'clear') {
    screen.html('');
  }
  if (screen.html() === 'ERROR') {
    return;
  }
  if (event.target.id !== 'clear') {
    screen.html(screen.html() + event.target.innerHTML);
  }
  if (event.target.id === 'equals') {
    evaluate();
  }
}

function evaluate(event) {
  if(screen.html()=== 'ERROR') {
    return;
  }
  let string = screen.html();
  let operand1;
  let operand2;
  let operator;
  let result;
  let operators = ['+', '-', 'x', '÷'];
  let operatorCount = 0;
  for (let i = 0; i < operators.length; i++) {
    for(let j = 0; j < string.length; j++) {
      if (string[j] === operators[i]) {
        operatorCount++;
        operator = operators[i];
      }
    }
  }
  if (operatorCount === 0) {
    return;
  }
  if (operatorCount > 1) {
    screen.html('ERROR');
    return;
  }
  if (operatorCount == 1) {
    operand1 = string.substring(0, string.indexOf(operator));
    operand2 = string.substring(string.indexOf(operator)+1, string.length);
    if(parseInt(operand1) === 0){
      screen.html('0');
      return;
    }
    if(parseInt(operand2) === 0){
      screen.html('ERROR');
      return;
    }
    switch(operator){
      case '+':
        result = parseInt(operand1) + parseInt(operand2);
        screen.html(result);
        break;
      case '-':
        result = parseInt(operand1) - parseInt(operand2);
        screen.html(result);
        break;
      case 'x':
        result = parseInt(operand1) * parseInt(operand2);
        screen.html(result);
        break;
      case '÷':
        result = parseInt(operand1) / parseInt(operand2);
        screen.html(result);
        break;
      default:
        screen.html('ERROR');
        return;
    }
  }
}
