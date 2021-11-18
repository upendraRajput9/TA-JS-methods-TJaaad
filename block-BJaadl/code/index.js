let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function  findLongestWord (strings){
  
    return (strings.sort((a,b)=>a.length-b.length).pop())
  }
console.log(findLongestWord(words))

// - Convert the above array "words" into an array of length of word instead of word.
let lengthOfWord = words.map((word)=>{
  return word.length
})
console.log(lengthOfWord)
// - Create a new array that only contains word with atleast one vowel.
let vowel = words.map((word)=>{

  if(word.includes(`a`)||word.includes(`e`)||word.includes(`i`)||word.includes(`o`)||word.includes(`u`)){
    return word
  }
})
console.log(vowel)
// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"))
// - Create a new array that contians words not starting with vowel.
let notVowel = words.map((word)=>{

  if(!word.includes(`a`)&&!word.includes(`e`)&&!word.includes(`i`)&&!word.includes(`o`)&&!word.includes(`u`)){
    return word
  }
})
console.log(notVowel)
// - Create a new array that contianse words not ending with vowel
let notEndVowel = words.map((word)=>{

  if(!word.endsWith(`a`)&&!word.endsWith(`e`)&&!word.endsWith(`i`)&&!word.endsWith(`o`)&&!word.endsWith(`u`)){
    return word
  }
})
console.log(notEndVowel)
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(numbers) {
  return numbers.reduce((acc, curr) => {
     acc = acc + curr;
     return acc; 
  }, 0);
}
console.log(sumArray(numbers))
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let array = numbers.map((number)=>{
  if(number%3===0)
  {return number}
})
console.log(array)
// - Create a new array that contains only even numbers
let even = numbers.map((number)=>{
  if(number%2===0)
  {return number}
})
console.log(even)
// - Create  a new array that contains only odd numbers.
let odd= numbers.map((number)=>{
  if(number%2!=0)
  {return number}
})
console.log(odd)
// - Create a new array that should have true for even number and false for odd numbers.
let trueFalse = numbers.map((number)=>{
  if(number%2===0)
  {return true}
  else{
    return false
  }
})
console.log(trueFalse)
// - Sort the above number in assending order.
 numbers.sort((a,b)=>
  (a-b)
)
// - Does sort mutate the original array?
// Yes
// - Find the sum of the numbers in the array.
let addarr=0
let add = numbers.map(number=>{
  addarr = addarr+number
  return addarr
})
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(array){
  array = addarr/numbers.length
  return array
}
console.log(averageNumbers(array))
  
let words2= [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];


// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(words2){
  return (words2
    .map((word)=>word.length)
    .reduce((acc,cv)=>{
return acc+cv
  },0)/words2.length)
}
console.log(averageWordLength(words2))