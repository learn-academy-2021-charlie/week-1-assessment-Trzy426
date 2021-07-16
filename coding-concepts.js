// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
//  console.log(cohort.length)

// a) Your answer: It will log the length of the string "Charlie 2021", which is 12
// b) Verify and explain: confirmed 12, important to note that " ", space is also counted in . length


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: it will log to the console the var greeting which is "Hello World" at the index of [3] which is the second l 
// beacuse index starts at 0. 
// b) Verify and explain: confirmed the second l 


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index]) 

// a) Your answer:console.log will take in variable index (at 1 in this instance) then take in the variable languages[1] and print
// "Ruby" because index starts at 0.
// b) Verify and explain: confirmed, it first has to take the index (var index) and then then language (var languages)


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: this will take the list of weekendDays and capitilize the entire list that is contained within the list weekendDays
// b) Verify and explain: fails to compile with the error "not a function" 


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
 console.log(typeof dataTypes.length)

// a) Your answer: you will receive the type of .length which is always number, thats it data type
// b) Verify and explain: number, its logging the typeof (datatype.length) .length turns whatever is in the datatypes list into a number.
