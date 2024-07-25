let currentInput = '';
let operator = null;
let firstOperand = null;
let shouldResetDisplay = false;

const displayElement = document.getElementById('display');

function clearAll() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    displayElement.innerText = '0';
}

function clearEntry() {
    currentInput = '';
    displayElement.innerText = '0';
}

function inputNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    currentInput += number;
    displayElement.innerText = currentInput;
}

function inputOperator(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (operator) {
        firstOperand = operate(firstOperand, parseFloat(currentInput), operator);
        displayElement.innerText = firstOperand;
    }
    operator = op;
    shouldResetDisplay = true;
}

function inputDecimal() {
    if (currentInput.includes('.')) return;
    currentInput += '.';
    displayElement.innerText = currentInput;
}

function calculateResult() {
    if (operator === null || shouldResetDisplay) return;
    const secondOperand = parseFloat(currentInput);
    const result = operate(firstOperand, secondOperand, operator);
    displayElement.innerText = result;
    currentInput = result.toString();
    operator = null;
    shouldResetDisplay = true;
}

function operate(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a % b;
        default:
            return b;
    }
}
