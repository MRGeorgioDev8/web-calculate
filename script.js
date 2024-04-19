const display = document.getElementById('display');

        function addToDisplay(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = '';
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }

        document.addEventListener('keydown', function (event) {
            const key = event.key;
            const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
            if (isMac) {
                if (key === 'Enter') {
                    calculate();
                } else if (key === 'Delete') {
                    clearDisplay();
                } else if (key === 'Backspace') {
                    event.preventDefault();
                    clearDisplay();
                } else if (key === '+' || key === '-' || key === '*' || key === '/') {
                    addToDisplay(key);
                } else if (!isNaN(key) && key !== ' ') {
                    addToDisplay(key);
                }
            } else {
                if (key >= '0' && key <= '9') {
                    addToDisplay(key);
                } else if (['+', '-', '*', '/'].includes(key)) {
                    addToDisplay(key);
                } else if (key === 'Enter') {
                    calculate();
                } else if (key === 'Backspace') {
                    clearDisplay();
                }
            }
        });