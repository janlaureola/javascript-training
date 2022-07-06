function factTable(formId) {
    // get the value
    var limit = formId.textin.value;

    //make sure limit is a valid number 
    if (limit >= 1) {
        // initialize variables
        var val = 1;
        var fact = 1;
        var result = "<pre>VALUE      FACTORIAL\n";
    
    // generate the table as a string

    for (var count = 1; count <= limit; count++) {
        result += val + "            " + fact + "\n";
        fact = fact * ++val;
            if (fact > 999999999999999) {
                result +=  "Value too Large";
                break;
            }
            }
            result += "</pre>";
    } else {
        result = "Invalid Limit!";
    }
    // output the table
    document.getElementById("textout").innerHTML = result;
}