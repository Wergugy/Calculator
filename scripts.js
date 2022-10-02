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

function storeOperator(e) {
        input.operator = e.target.textContent;
        console.log(input.operator);
};

function storeNumber(e) {
        if (!input.operator) input.leftExp =+ e.target.textContent;
        else input.rightExp =+ e.target.textContent;
};

function getInput() {
        const selection = document.querySelector(/*later*/).textContent;
        if (!isInteger(selection)) input.operator = selection;
        else if (!input.leftExp) input.leftExp = selection;
        else input.rightExp = selection;
};

function clear() {
        console.log(input);
        input.leftExp = null;
        input.rightExp = null;
        input.operator = null;
};

const input = {
        leftExp: null,
        rightExp: null,
        operator: null,
};


const operatorButtons = document.querySelectorAll('.operator');
console.log(operatorButtons);
operatorButtons.forEach((operator) => {
        operator.addEventListener('click', storeOperator)
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clear);

const numberButtons = document.querySelectorAll('.num');
console.log(numberButtons);
numberButtons.forEach((number) => {
        number.addEventListener('click', storeNumber)
});

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', operate);

const displayTop = document.querySelector('#displayTop');
//displayTop.textContent = ;
const displayBot = document.querySelector('#displayBot');


