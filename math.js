function calculate(operation) {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result;

    if (operation === 'add') {
        result = number1 + number2;
    } 
    else if (operation === 'subtract') {
        result = number1 - number2;
    } 
    else if (operation === 'multiply') {
        result = number1 * number2;
    }
    else if (operation === 'devide'){
       result = number1 / number2
    }
    else {
        result = 'Invalid operation';
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}

