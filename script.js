let button = document.getElementById("button");

function calculate() {
    let number1 = parseInt(document.getElementById("numberOne").value);
    let number2 = parseInt(document.getElementById("numberTwo").value);
    let result = document.getElementById("result");
    let operator = document.getElementById("operator").value;

    switch (operator) {
        case "+":
            result.innerHTML = number1 + number2;
            break;
        case "-":
            result.innerHTML = number1 - number2;
            break;
        case "*":
            result.innerHTML = number1 * number2;
            break;
        case "/":
            result.innerHTML = number1 / number2;
            break;
    }

}

button.addEventListener("click", calculate);

let input2 = document.getElementById("numberTwo");
input2.addEventListener("keypress", function(event){
    if(event.key == "Enter") {
        event.preventDefault();
        button.click();
    }
});
