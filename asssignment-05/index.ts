//1-- Write a program that uses filter to remove all negative numbers from an array of numbers
var integers:number[] = [21,45,768,43,-76,34,-7,25,-13,33,-11,-4,657,-21]

console.log(`Origrinal Array [${integers}]`)

var updatedIntergers = integers.filter((integers) => {
    if(integers > 0 )
    return true;
})
console.log(`Updated Array [${updatedIntergers}]`)

// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

var array:number[] = [1, 2, 3, 4, 5]
console.log(`Original Array [${array}]`)

var updatedArray = array.map((array) => {
    return array * 2
})

console.log(`Updated Array [${updatedArray}]`)


// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

var fruits:string[] = ["Apple" ,"Banana", "Cherry", "Date", "Grape"]

console.log(`Original Array [${fruits}]`)

var updatedFruits = fruits.filter((fruits) =>{
        return fruits.length > 5;
})
console.log(`Updated Array [${updatedFruits}]`)



// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.


var numberArray:number[] = [1,2,3,4,5,6,7,8,9,10];

console.log(`Original Array [${numberArray}]`)


var updatedNumberArray = numberArray.filter((numberArray) => numberArray % 2 === 0).map((updatedNumberArray ) => updatedNumberArray ** 2 )

console.log(`Updated Array [${updatedNumberArray}]`)


// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

var celciusTemp:number[] = [0, 10, 20, 30, 40, 50]
console.log(`Celcius Temperatures Array [${celciusTemp}]`)

var fahrenheitTemp = celciusTemp.map((celciusTemp) => {
    const fahrenheitTemp = (celciusTemp * 9/5) + 32
    return fahrenheitTemp;
})

console.log(`Fahrenheit Temperatues Array [${fahrenheitTemp}]`)


// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.

var numberArray2:number[] = [3,6,9,12,15,18]

console.log(`Original Array [${numberArray2}]`)

var updatedNumberArray2 = numberArray2.filter((numberArray2) => numberArray2 % 2 !== 0).map((updatedNumberArray2) => updatedNumberArray2 * 2) 
console.log(`Updated Array [${updatedNumberArray2}]`)


// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".

var namesArray:string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];

console.log(`Original Names [${namesArray}]`)

namesArray.forEach((names) => {
    console.log(names + "!")
})