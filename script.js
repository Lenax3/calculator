///////////ADDITION///////////
function add(a, b) {
    return a + b;
}
///////////SUBTRACTION///////////
function subtract(a, b) {
    return a - b;
}
///////////MULTIPLICATION///////////
function multiply(a, b) {
    return a * b;
}
///////////DIVISION///////////
function divide(a, b) {
    if (b=== 0) {
        return "Didn't u pay attention in maths?";
    }
    return a / b;
}
///////////OPERATE///////////
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);

  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);
}
///////////STATE (MIND)///////////
let firstNumber = "";
let operator = "";
let secondNumber = "";
let shouldResetDisplay = false;

///////////DOM (DISPLAY)///////////
const display = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

///////////EVENTLISTENER NUMBERS///////////
numberButtons.forEach(button => {
    button.addEventListener("click", () => {

        //Result Reset Fix//
        if (shouldResetDisplay) {
            firstNumber = "";
            secondNumber = "";
            operator = "";
            display.textContent = "";
            shouldResetDisplay = false;
        }
        //Number Input Logic//
        if (operator === "") {
            firstNumber += button.textContent;
            display.textContent = firstNumber;
        } else {
            secondNumber += button.textContent;
            display.textContent = secondNumber
        }
    });
});

///////////EVENTLISTENER OPERATORS///////////
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (firstNumber !== "" && secondNumber !== "") {
            firstNumber = operate(operator, firstNumber, secondNumber);
            display.textContent = firstNumber;
            secondNumber = "";
        }

        operator = button.textContent;
    });
})

///////////EVENTLISTENER EQUALS///////////
equalsButton.addEventListener ("click", () => {

    if (firstNumber === "" || operator === "" || secondNumber === "" || ) {
        return;
    }
    //if something of the following components is missing, EL is being interrupted
    display.textContent = operate(operator, firstNumber, secondNumber);
    shouldResetDisplay = true;
});

///////////EVENTLISTENER CLEAR///////////
clearButton.addEventListener ("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.textContent = "0";
});