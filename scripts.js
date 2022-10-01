function add(a, b) {
        return a + b;
};

function subtract(a, b) {
        return a - b;
};
      
function multiply(a, b) {
        return a * b;
};

function divide(a, b) {
        return a / b;
};

function operate(input) {
        switch (input.operator) {
                case '*':
                        multiply(input.leftExp, input.rightExp);
                        break;
                case '+':
                        add(input.leftExp, input.rightExp);
                        break;
                case '-':
                        subtract(input.leftExp, input.rightExp);
                        break;
                case '/':
                        divide(input.leftExp, input.rightExp);
                        break;
        };
        clear();
};

const operatorButton = document.querySelectorAll(/*later*/);
operatorButton.addEventListener('click', storeOperator);

const numberButton = document.querySelectorAll(/*later*/);
numberButton.addEventListener('click', storeNumber);

const equalButton = document.querySelector(/*later*/);
equalButton.addEventListener('click', operate);

const displayTop = document.querySelector(/*later*/);
//displayTop.textContent = ;
const displayBot = document.querySelector(/*later*/);

function storeOperator() {
        input.operator = operatorButton.textContent;
};

function storeNumber() {
        if (!input.operator) input.leftExp =+ numberButton.textContent;
        else input.rightExp =+ numberButton.textContent;
};

function getInput() {
        const selection = document.querySelector(/*later*/).textContent;
        if (!isInteger(selection)) input.operator = selection;
        else if (!input.leftExp) input.leftExp = selection;
        else input.rightExp = selection;
};

function clear() {
        input.leftExp = null,
        input.rightExp = null,
        input.operator = null;
};

const input = {
        leftExp,
        rightExp,
        operator,
};
