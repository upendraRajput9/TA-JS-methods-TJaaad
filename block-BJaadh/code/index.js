// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];
 [1, 1221, 3, 1, 1881, 4, 5, 6, 7, 9, 9, 11, 12, 18, 101]
/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101))

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9))
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "))
// - Add two new words in the strings array "called" and "sentance"
console.log(strings.push( "called","sentance"))
console.log(strings)
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "))
// - Remove the first word in the array (strings)
console.log(strings.shift())
// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.includes(`is`))
// - Find all the words that contain 'is' use string method 'indexOf'
console.log(strings.indexOf(`is`))
// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every((val)=>(val%3===0)))
// -  Sort Array from smallest to largest
console.log(numbers.sort((a,b)=>(a-b)))
// - Remove the last word in strings
console.log(strings.pop())
// - Find largest number in numbers
console.log(numbers[numbers.length-1])
// - Find longest string in strings
console.log(strings.sort((a,b)=>a.length-b.length).pop())
// - Find all the even numbers
console.log(numbers.filter((number)=>number%2===0))
// - Find all the odd numbers
console.log(numbers.filter((number)=>number%2!==0))
// - Place a new word at the start of the array use (unshift)
console.log(strings.unshift('That'))
console.log(strings)
// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice([18, 9, 7, 11 ]))

// - Make a subset of strings array ['a','collection']
console.log(numbers.slice(['a','collection']))
// - Replace 12 & 18 with 1221 and 1881
console.log(numbers.splice(1,1,1221),
numbers.splice(3,1,1881))

// - Replace words in strings array with the length of the word
console.log(strings.splice(strings.length-2,1,`length`))
// - Find the sum of the length of words using above question
let length=strings.join()
console.log(length.length)
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let filterCustomer=customers.map((customer)=>customer.firstname.startwith(`j`))
// - Create new array with all the full names (ex: "Joe Blogs")
let filterCustomer=customers.map((customer)=>`${customers.firstname} ${customers.lastname}`)

// - Sort the array created above alphabetically
console.log(fullName.sort())
// - Create a new array that contains only user who has at least one vowel in the firstname.

let isVowel = customers.filter((customer) => {
  if (
    val.firstname.includes("a") ||
    val.firstname.includes("e") ||
    val.firstname.includes("i") ||
    val.firstname.includes("o") ||
    val.firstname.includes("u")
  ) {
   return true
  }else{
    return false
  }
});