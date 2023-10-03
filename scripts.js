function add(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2===0){
        return alert("Divide by 0 Error");
    }
    return num1 / num2;
}

function calculate(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;


    switch (operator) {
        case "add":
            result = add(num1, num2);
            break;
        case "subtraction":
            result = subtraction(num1, num2);
            break;
        case "multiply":
            result = multiply(num1, num2);
            break;
        case "divide":
            result = divide(num1, num2);
            break;
        default: 
            result = "invalid Operator";            
    }
    document.getElementById("result").textContent = "Result " + result;
}