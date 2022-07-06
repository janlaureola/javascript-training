// test the while loop statement

// var total = 5;
/* var input = prompt("Enter a number, or 0 to stop"); 
    while (input != 0) {
        total += input;
        input = prompt("Is that your number? Try again");
    } 
    document.write("Total equals " + total); */

// test do-while loop

/* var total = 0;

do {
    input = prompt("Enter a number, or 0 to stop");
    total += Number(input);
} while (input != 0);

document.write("Total equals " + total); */

// do-while version

/* var val = 1;
var count = 1;
var fact = 1;
document.write("<pre>VALUE  FACTORIAL\n");
do {
    document.write(val + "   " + fact + "\n");
    count++;
    val++;
    fact = fact * val;
} while (count <= 10);
document.write("</pre>"); */

// for loop version

var val = 1;
var fact = 1;
document.write("<pre>VALUE      FACTORIAL\n");
for (var count = 1; count <= 10; count++) {
    document.write(val + "      " + fact + "\n");
    fact = fact * ++val;
}
document.write("</pre>");