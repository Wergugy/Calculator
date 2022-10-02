function add(a, b) {
        return +(a) + +(b);
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

function operate() {
        let answer;
        switch (input.operator) {
                case '*':
                        answer = multiply(input.leftExp, input.rightExp);
                        break;
                case '+':
                        answer = add(input.leftExp, input.rightExp);
                        break;
                case '-':
                        answer = subtract(input.leftExp, input.rightExp);
                        break;
                case '/':
                        answer = divide(input.leftExp, input.rightExp);
                        break;
        };
        updateAnswer(answer);
};

function storeOperator(e) {
        input.operator = e.target.textContent;
        updateBotDisplay();
};

function storeNumber(e) {
        if (!input.operator) {
                if (input.leftExp === null) input.leftExp =
                 e.target.textContent;
                 else input.leftExp +=
                 e.target.textContent;
                updateBotDisplay();
        }
        else {
                if (input.rightExp === null) input.rightExp =
                 e.target.textContent;
                 else input.rightExp +=
                 e.target.textContent;
                 updateBotDisplay();
        };
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
        displayTop.textContent = null;
        updateBotDisplay();
};

const input = {
        leftExp: null,
        rightExp: null,
        operator: null,
};

function updateBotDisplay() {
        if(Object.values(input).every(v => v !== null)) {
        displayBot.textContent = input.leftExp + ' '  + input.operator + ' '  + input.rightExp;
        }
        else if (!input.operator) displayBot.textContent = input.leftExp;
        else displayBot.textContent = input.leftExp + ' ' + input.operator;
};

function updateAnswer(answer) {
        displayTop.textContent = displayBot.textContent;
        displayBot.textContent = answer;
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
const displayBot = document.querySelector('#displayBot');
