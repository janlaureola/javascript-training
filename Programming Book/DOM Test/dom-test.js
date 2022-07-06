function findSquare(formId) {
    // Get the input number 
    var inputNum = formId.textin.value;

    // if valid, compute its square
    var result; 
    if (inputNum >= 1 && inputNum <=10) {
        result = inputNum* inputNum;
    } else {
        result = "Invalid number!";
    }

    // display the result

    document.getElementById("textout").innerHTML = result;
}