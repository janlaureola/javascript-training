// test the while loop statement

// var total = 5;
/* var input = prompt("Enter a number, or 0 to stop"); 
    while (input != 0) {
        total += input;
        input = prompt("Is that your number? Try again");
    } 
    document.write("Total equals " + total); */
    
// test do-while loop

var total = 0;

do {
    input = prompt("Enter a number, or 0 to stop");
    total += Number(input);
} while (input != 0);

document.write("Total equals " + total);