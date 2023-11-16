document.addEventListener('DOMContentLoaded', function () {
    const inputBox = document.querySelector('.box1');
    const buttons = document.querySelectorAll('button');

    let expression = '';
    inputBox.value = '0'; 

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const buttonText = this.textContent
            
            const lastChar = expression.slice(-1);
            let lc = lastChar;
            if ((isOperator(lastChar) || lastChar === '.') && (isOperator(buttonText) || buttonText === '.')) {
                return; 
            }
            if ((expression === '' || expression === '0') && (buttonText === 'x' || buttonText === '/')) {
                return; 
            }

            
            if (buttonText === 'RESET') {
                expression = '0';
            } else if (buttonText === '=') {
                expression = evaluateExpression(expression);
            } else if (buttonText === 'DEL') {
                expression = expression.slice(0, -1);
            }
            else if (lastChar === '.' && isOperator(buttonText)) {
                return;
            }
            else if (lastChar === '' && buttonText === "0") {
                expression = '0';
            }
           
            
             else {
                if (expression === '0'&& buttonText === ".") {
                    expression += buttonText;
                }
                else if(expression === '0') {
                    expression = buttonText;
                }
                 else {
                    expression += buttonText;
                }
            }
            
            if (expression.length < 12 ) {
            inputBox.value = expression;
        }
        });
    
    });

    function evaluateExpression(expression) {
        var correctedExpression = expression.replace(/x/g, "*");
        try {
            let result = eval(correctedExpression);
            
            result = parseFloat(result.toFixed(3));
            correctedExpression = result.toString();
            return result.toString();
        } catch (error) {
            return 'Error';
        }
    }

    function isOperator(char) {
        return ['+', '-', 'x', '/'].includes(char);
    }
});
