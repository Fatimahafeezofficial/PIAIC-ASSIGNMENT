//1- write a program to convert the temperature from celsius to fahrenheit and vice versa 
var temp : number = 90;
var celcisioustofahrenheit:number = (temp * 9/5 )+ 32;
console.log ("celcius to faherheit ="+ celcisioustofahrenheit);
var faherheittocelcius :number =(temp -32)*5/9;
console.log("farhenheit to celcius = "+faherheittocelcius );

// 2- write a program that caluclates the percentage 
var obtainedmarks : number = 40
var totalmarks :number =120 
var percentage :number= (obtainedmarks/totalmarks)*100;
console.log ("percentage =" + percentage );

//3-write a program that converts given number of days in to weeks and days 
var numberofdays :number= 25;
var weeks:number = numberofdays/7;
var days :number = numberofdays/7;
console.log (numberofdays+" days = "+weeks+ "weeks"+ days +"days");
// 4- a program that calculates the discount for the product based on its price 
var price :number= 90
if (price >100){
    var price :number= price *0.90;
    console.log (" price =" +price);
}
else {
    var price: number= price*0.95;
    console.log ( "price ="+ price);
}
//a program that provides user provided age 
var age : number= 14
if (age >0 && age<=12){
    console.log ("child");
}
else if (age>14 && age <=19){
    console.log ("teenager");
}
else {
    console.log ("adult ");
}

//a program if weather is cold wear warm clothes and 
var temperature:string= "summer";
if (temperature =="cold"){
    console.log ("wear warm clothes");
}
else { 
    console.log ("wear summer clothes");
}
// write a program that checks if the given number is divisble by 3or 5 or both or not divisible by anyone show output accordingly 
var number:number=30;
if (number%3==0 &&  number%5==0 ){
    console.log ("number is divisible by 3 & 5 ");
}
else if (number%3==0){
    console.log ("number is divisile by 3");
}
else if (number%5==0 ){
    console.log (" number is divisible by 5");
}
else{
    console.log ("number is not divisible by 3 & 5");
} 
//a program that checks if the given year is leap year or not 
var numberofdaysinayear :number=366; 
if (numberofdaysinayear==366){
    console.log ("its a leap year");
}
else{
    console.log ("its a normal year");
}
// develop a program that determines the day of the week ask the user for a number (1-7) and use nested if statements to print the corresponding days name 
var daynumber  :number=3;
if (daynumber ==1 ){
    console.log("monday");
}
if (daynumber ==2 ){
    console.log ("tuesday ");
}
if (daynumber ==3){
    console.log ("wednesday ");
}
if (daynumber==4 ){
    console.log ("thursday ");
}
if (daynumber==5 ){
    console.log ("friday ");
}
if (daynumber ==6){
    console.log ("saturday ");
}
if (daynumber==7 ){
    console.log ("sunday ");
}
else {
    console.log ("select number brtween 1 to 7 ");
}
 //Write a program that takes number of units consumed by a user if it is greater than 100 then add 10% TAX If greater than 200 then add 15%of tax , so on up to if  greater than 500 then add 25% of tax, where the amount will be calculated by the amount of bill.

var unitconsumed:number=50;
var rateofunit:number=10;
var bill:number= unitconsumed*rateofunit;
if (bill>=100 && bill<200 ){
    var tax:number=bill*0.10;
    var bill:number=bill+tax;
    console.log("bill = " + bill);
}
else if (bill>=200 && bill<500 ){
    var tax:number=bill*0.15;
    var bill:number=bill+tax;
    console.log("bill = " + bill);
}
else if (bill>=500  ){
    var tax:number=bill*0.25;
    var bill:number=bill+tax;
    console.log("bill = " + bill);
}
else{
    console.log("bill = "+bill);
}