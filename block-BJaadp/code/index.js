let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
 let averageGrade=persons.reduce((acc,cv)=>{
   acc = acc+cv.grade
   return acc
 },0)/persons.length
console.log(averageGrade)

// Find the average grade of male
let maleGrade = persons.filter((person)=>{
  if(person.sex === `M`){
    return person
  }
})
let averageMaleGrade=maleGrade.reduce((acc,cv)=>{
  acc = acc+cv.grade
  return acc
},0)/maleGrade.length
// Find the average grade of female
let femaleGrade = persons.filter((person)=>{
  if(person.sex === `F`){
    return person
  }
})
let averageFemaleGrade=femaleGrade.reduce((acc,cv)=>{
  acc = acc+cv.grade
  return acc
},0)/femaleGrade.length
// Find the highest grade
let arr = [];
let highestGrade = persons.reduce((acc,cv)=>{
  acc = cv;
   arr.push(acc.grade)
   return acc
},0)
console.log(arr.sort((a,b)=>a-b).pop())

// Find the highest grade in male
let arr1 = [];
let highestMaleGrade = maleGrade.reduce((acc,cv)=>{
  acc = cv;
   arr1.push(acc.grade)
   return acc
},0)
console.log(arr1.sort((a,b)=>a-b).pop())
// Find the highest grade in female
let arr2 = [];
let highestFemaleGrade = femaleGrade.reduce((acc,cv)=>{
  acc = cv;
   arr2.push(acc.grade)
   return acc
},0)
console.log(arr2.sort((a,b)=>a-b).pop())
// Find the highest grade for people whose name starts with 'J' or 'P'
let listJP = persons.filter((person)=>{
  if(person.name.startsWith(`J`) || person.name.startsWith(`P`)){
    return person
  }
})
let arr3 = [];
let highestJPGrade = listJP.reduce((acc,cv)=>{
  acc = cv;
   arr3.push(acc.grade)
   return acc
},0)
console.log(arr3.sort((a,b)=>a-b).pop())
const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];
/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let n=1;
let fruitsObj =fruitBasket.reduce((acc,cv)=>{
  if(cv.hasOwnProperty(acc[cv]) ){
    acc[cv]=acc[cv]+1
  }
  else{
    acc[cv]=n
  }
  return acc
},{})
console.log(fruitsObj)
/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/
let fruitsObjArr = Object.keys(fruitsObj).reduce((acc,cv)=>{
  acc = acc.concat([[cv,fruitsObj[cv]]])
  return acc
  },[])
const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array
data.reduce((acc,cv)=>{
  acc = acc.concat(cv)
return acc
},[])
const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
data.reduce((acc,cv)=>{
  acc = acc.concat(cv.flat(Infinity))
return acc
},[])
/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];
function increment(num){
return num+1
}
function double(num){
  return num*2
  }
function decrement(num){
  return num-1
  }
  function triple(num){
    return num*3
    }

    function half(num){
      return Math.round(num)
      }
/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/
let line1=pipeline.reduce((acc,cv)=>{
  acc= cv(acc)
  return acc
},3)
let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
let line2=pipeline2.reduce((acc,cv)=>{
  acc= cv(acc)
  return acc
},8)