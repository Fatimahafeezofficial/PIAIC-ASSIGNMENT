"use strict";
// write aprogram that caluculate the area of a rectangle 
var lengthofrectangle = 12;
var widthofrectangle = 4;
var result = lengthofrectangle * widthofrectangle;
console.log(result);
//-2 write a program that takes input and calculate the volume of a cube 
var length = 3;
var breath = 4;
var heigth = 5;
console.log(length * breath * heigth);
//-3 write a program that caluclats the result of a mathematical expression 
var givennumber = 0;
if (givennumber < 0) {
    console.log("given number is negative.");
}
else if (givennumber > 0) {
    console.log("given number is positive .");
}
else {
    console.log("given number is zero .");
}
//-4write a program that determines if a givennumber is even or odd
var number = 15;
if (number / 2 == 0) {
    console.log("number is even ");
}
else {
    console.log("number is odd");
}
//-5 write a program that determines if a person is elligible to vote based on the age 
var age = 18;
if (age = 18) {
    console.log("eligible to vote");
}
else {
    console.log("ineligible to vote ");
}
//-6 write a program that calculates the result of a mathematical expression((10+5)*3-2/(4%3)-7) 
var a = (10 + 5) * 3 - 2;
var b = (4 % 3 - 7);
var resultofexpersion = a / b;
console.log("result =" + resultofexpersion);
