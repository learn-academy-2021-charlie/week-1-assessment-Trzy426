// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"
//who = function with parametes test = var temp1,2,3 and boiling point, const boilingPoint should never change.
//what = function will determine between which 3 options ("test is below boiling point", "test is above boiling point", "test is at boiling point")
//how = using a function. with a catchall at the end
var temp1 = 35
var temp2 = 350
var temp3 = 212

const willItBoil = (test) => {
    const boilingPoint = 212
    if (test > boilingPoint) {
         return console.log(`${test} is above the boiling point ${boilingPoint}`)
     }else if  (test < boilingPoint) {
        return console.log(`${test} is below the boiling point ${boilingPoint}`)
     }else if  (test === boilingPoint) {
        return console.log(`${test} is at boilingPoint`)
     }else{
        console.log("fail, please enter a valid temperature in Farenheight(Freedom Units)")
     }
}
willItBoil(temp1)
// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]
//who function named numberSort will take 2 params numList1, numList2 
//what numbers will be first combined then seperate the - numbers sort them seperately then combining the list so - numbers are in order ****this was done after i was informed you did not have to use iteration****** Also uses a sort positive numbers
var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]
const numberSort = (numList1, numList2) => {
    var fullList = numList1.concat(numList2)
    var almostSortedList = fullList.sort()
    var positiveList = almostSortedList.slice(2).sort((a, b) => a-b) // <--- this was all i needed to sort the entire list, i wanted to try a different way and it was just showing incorrect numbers. -9, -7, 0, 13, 22,3 , 36, 7,  8,  9
    var unSetNegativeList = almostSortedList.slice(0,almostSortedList.indexOf(0))//-7,-9
    var negativeList = unSetNegativeList.reverse()
    correctedList = negativeList.concat(positiveList)
    console.log(correctedList)
    
}
numberSort(myNumbers1,myNumbers2)


// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"
//who function with paramers orderedWord
//what reversing a word
//how making a function, using .reverse to reverse the string
var myString1 = "bravo"
var myString2 = "charlie"
const reverseWord = (orderedWord) =>{
     var splitWord = orderedWord.split("")
     var reversedString = splitWord.reverse()
     var joinedWordReversed = reversedString.join("")
     return console.log(joinedWordReversed)
}
reverseWord(myString1)

// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12
//who = function subtractSmallFromBig, params num1 num2, returns ans 
//what = function to subtract a smaller number from a larger number
//how = find which number is smalles, subtract from largest, also if they equal zero, and if theres an error
var numberExample1 = 42
var numberExample2 = 27

var numberExample3 = 7
var numberExample4 = 19

const subtractSmallFromBig = (num1, num2) => {
    if (num1 === num2){
        console.log("answer is 0")
    }else if(num1 > num2){
        console.log(num1 - num2)
    }else if(num2 > num1){
        console.log(num2-num1)
    }else {
        console.log("please input an integer :(")
    }
}
subtractSmallFromBig(numberExample1,numberExample2)
// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)

//Used nested if statement to check for the non-number types using != number data type

var numberExampleRefactor1 = 42
var numberExampleRefactor2 = "hello"

var numberExampleRefactor3 = 27
var numberExampleRefactor4 = 24
const subtractSmallFromBigRefactor = (num1, num2) => {
   if (typeof(num1) === "number" && typeof(num2) == "number"){
        if (num1 === num2){
            console.log("answer is 0")
        }else if(num1 > num2){
        console.log(num1 - num2)
        }else if(num2 > num1){
        console.log(num2-num1)
        }else {
        console.log(``)
        }
   }else if(typeof(num1) != "number"){
       console.log(`error ${num1} is not a number data type`)
   }else if(typeof(num2) != "number"){
    console.log(`error ${num2} is not a number data type`)
   }
}
subtractSmallFromBigRefactor(numberExampleRefactor1,numberExampleRefactor2)