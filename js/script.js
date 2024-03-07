const display = document.getElementById('display');

function AddToDisplay(value) {
    if (display.textContent == '0') {
        display.textContent = '';
    }
    display.textContent += value;
}

function clearDisplay() {
    display.textContent = '0';
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = '0';
    }
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}


