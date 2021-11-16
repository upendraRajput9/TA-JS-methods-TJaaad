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

// Create an array peopleName and store value of name key from persons array
let peopleName = persons.map((person)=>{
  return person.name
})
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((person)=>{
  return person.grade
})
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex  = persons.map((person)=>{
  return person.sex
})
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
listJP=peopleName.filter((listJ)=>{
  return listJ.startsWith(`J`)||listJ.startsWith(`P`)
})

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
listAC=peopleName.filter((listJ)=>{
  return listJ.startsWith(`A`)||listJ.startsWith(`C`)
})
// Log all the filtered male ('M') in persons array
console.log(persons.filter((person)=>{
  if(person.sex.includes(`M`)){
    return person
  }
}))
// // Log all the filtered female ('F') in persons array
console.log(persons.filter((person)=>{
  if(person.sex.includes(`F`)){
    return person
  }
}))
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter((person)=>{
  if(person.sex.includes(`F`) &&  person.name.startsWith(`J`) ||person.name.startsWith(`C`)){
    return person
    
  }
}))
// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter((even)=>{
if(even%2==0){
  return even
}
}))
// Find the first name that starts with 'J' in persons array and log the object
nameJList=peopleName.filter(people=>{
  return people.startsWith(`J`)
})
// Find the first name that starts with 'P' in persons array and log the object
console.log(peopleName.filter(people=>{
  return people.startsWith(`P`)
}))
// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.filter(person=>{
  if(person.sex.includes(`F`)&&person.name.startsWith(`J`)&&person.grade>10){
    return person
  }
}))
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person)=>{
  if(person.sex.includes(`F`)){
    return person
  }
})
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((person)=>{
  if(person.sex.includes(`M`)){
    return person
  }
})
// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons
.map(person=>{return person.grade})
.reduce((acc,cv) => {
return acc + cv
},0);
console.log(gradeTotal);
// Find the average grade
console.log(gradeTotal/peopleGrade.length)
// Find the average grade of male
averageMaleGrade=malePersons
.map((person)=>{return person.grade})
.reduce((acc,cv)=>{return acc + cv},0)/malePersons.length
// Find the average grade of female
averagefemaleGrade=femalePersons
.map((person)=>{return person.grade})
.reduce((acc,cv)=>{return acc + cv},0)/femalePersons.length
// Find the highest grade
console.log([...peopleGrade].sort((a,b)=>(a-b)).pop())
// Find the highest grade in male
console.log(malePersons.map((person)=>{return person.grade})
.sort((a,b)=>(a-b)).pop())
// Find the highest grade in female
console.log(femalePersons.map((person)=>{return person.grade})
.sort((a,b)=>(a-b)).pop())
// Find the highest grade for people whose name starts with 'J' or 'P'
let gradeOfJP = persons.filter((person)=> person.name.startsWith(`J`) || person.name.startsWith(`P`));
let jPGrade = gradeOfJP.map((person)=>{
  return person.grade
})
let gradeheightest =[...jPGrade].sort((a,b)=>(a-b)).pop()
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log([...peopleGrade].sort((a,b)=>(a-b)))
// Sort the peopleGrade in descending order
console.log([...peopleGrade].sort((a,b)=>(b-a)))
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a,b)=>(b-a)))
// Sort the array peopelName in ascending `ABCD..Za....z`
console.log(peopleName.sort())
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log(peopleName.sort())