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
        if (b === '0') {return displayBot.textContent = 'NOPE'}
        else return a / b;
};

function operate() {
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
        while(answer) {
        if (displayBot.textContent === (answer.toString())) {
               input.leftExp = '',
                updateBotDisplay();
                displayTop.textContent = `Ans= ${answer}`;
        } break;};
        if (!input.operator) {
                if (input.leftExp === null) input.leftExp =
                        e.target.textContent;
                else {
                        if (input.leftExp.includes('.')
                                && e.target.textContent === '.') return;
                        input.leftExp +=
                                e.target.textContent;
                }
                updateBotDisplay();
        }
        else {
                if (input.rightExp === null) input.rightExp =
                        e.target.textContent;
                        else {
                                if (input.rightExp.includes('.')
                                        && e.target.textContent === '.') return;
                                input.rightExp +=
                                        e.target.textContent;
                        }
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
        input.leftExp = null;
        input.rightExp = null;
        input.operator = null;
        displayTop.textContent = null;
        answer = null;
        updateBotDisplay();
};

const input = {
        leftExp: null,
        rightExp: null,
        operator: null,
};

function updateBotDisplay() {
        if (Object.values(input).every(v => v !== null)) {
                displayBot.textContent = input.leftExp + ' ' + input.operator + ' ' + input.rightExp;
        }
        else if (!input.operator) displayBot.textContent = input.leftExp;
        else displayBot.textContent = input.leftExp + ' ' + input.operator;
};

function updateAnswer(answer) {
        displayTop.textContent = displayBot.textContent;
        displayBot.textContent = answer;
        input.leftExp = answer;
        input.operator = null;
        input.rightExp = null;
};

function fixing() {
        if (!input.operator) input.leftExp = input.leftExp.toString().replace(/.$/, '');
        else if (input.operator && input.rightExp === null) input.operator = null;
        else input.rightExp = input.rightExp.toString().replace(/.$/, '');
        updateBotDisplay();
        if (input.leftExp === '') input.leftExp = null;
        if (input.rightExp === '') input.rightExp = null;
}

let answer = null;

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

const correct = document.querySelector('.fill');
correct.addEventListener('click', fixing);