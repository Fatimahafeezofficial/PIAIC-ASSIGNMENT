"use strict";
//1- write a program to convert the temperature from celsius to fahrenheit and vice versa 
var temp = 90;
var celcisioustofahrenheit = (temp * 9 / 5) + 32;
console.log("celcius to faherheit =" + celcisioustofahrenheit);
var faherheittocelcius = (temp - 32) * 5 / 9;
console.log("farhenheit to celcius = " + faherheittocelcius);
// 2- write a program that caluclates the percentage 
var obtainedmarks = 40;
var totalmarks = 120;
var percentage = (obtainedmarks / totalmarks) * 100;
console.log("percentage =" + percentage);
//3-write a program that converts given number of days in to weeks and days 
var numberofdays = 25;
var weeks = numberofdays / 7;
var days = numberofdays / 7;
console.log(numberofdays + " days = " + weeks + "weeks" + days + "days");
// 4- a program that calculates the discount for the product based on its price 
var price = 90;
if (price > 100) {
    var price = price * 0.90;
    console.log(" price =" + price);
}
else {
    var price = price * 0.95;
    console.log("price =" + price);
}
