document.addEventListener('DOMContentLoaded', function () {
    const inputBox = document.querySelector('.box1');
    const buttons = document.querySelectorAll('button');

    let expression = ''; 

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const buttonText = this.textContent;

            if (inputBox === "0" && isOperator(buttonText)) {
                inputBox = inputBox + buttonText;
                return;
            }if (buttonText === 'DEL') {
                
                expression = expression.slice(0, -1);
            } else if (buttonText === 'RESET') {
            
                expression = '';
            } else if (buttonText === '=') {
                expression = evaluateExpression(expression);
                
            } else {
                expression += buttonText;
            }

            inputBox.value = expression;
        });
    });

    function evaluateExpression(expression) {
        try {
            const result = eval(expression);
            
            expression = result.toString();

            return result.toString();
        } catch (error) {
            return 'Error';
        }
    }
});
