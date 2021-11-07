// NOTE: You can only use the (reduce) array method to solve this exercise:

function countAllPeople(acc,bcc) {
  // your code goes here
 return got.houses.reduce((acc,cb)=>{
   return acc + cb.people.length
 },0)
}

function peopleByHouses() {
  // your code goes here
  totalpeople = [];
  got.houses.forEach((house)=>{
    totalpeople[house.name] = house.people.reduce((acc,cd)=>{
      return acc + 1
    },0)
  })
  return totalpeople
}
 
function everyone() {
  // your code goes here
  everyoneName = [];
  got.houses.forEach((house)=>{
    let everyoneInHouse = house.people.reduce((acc,cb)=>{
      return acc.concat(cb.name)
    },[]);
everyoneName = everyoneName.concat(everyoneInHouse)
  });
  return everyoneName
}

function nameWithS() {
  // your code goes here
  everyoneName = [];
  got.houses.forEach((house)=>{
    let everyoneInHouse = house.people.reduce((acc,cb)=>{
      return acc.concat(cb.name)
    },[]);
everyoneName = everyoneName.concat(everyoneInHouse)
  });
  return everyoneName.filter((name)=>{
    return name.toLowerCase()+name.includes("S")
  })
}

function nameWithA() {
  // your code goes here
  everyoneName = [];
  got.houses.forEach((house)=>{
    let everyoneInHouse = house.people.reduce((acc,cb)=>{
      return acc.concat(cb.name)
    },[]);
everyoneName = everyoneName.concat(everyoneInHouse)
  });
  return everyoneName.filter((name)=>{
    return name.toLowerCase()+name.includes("A")
  })
}

function surnameWithS() {
  // your code goes here
  everyoneName = [];
  got.houses.forEach((house)=>{
    let everyoneInHouse = house.people.reduce((acc,cb)=>{
      return acc.concat(cb.name)
    },[]);
everyoneName = everyoneName.concat(everyoneInHouse)
  });
  return everyoneName.filter((name)=>{
    return name.includes("S")
  })
}

function surnameWithA() {
  // your code goes here
  everyoneName = [];
  got.houses.forEach((house)=>{
    let everyoneInHouse = house.people.reduce((acc,cb)=>{
      return acc.concat(cb.name)
    },[]);
everyoneName = everyoneName.concat(everyoneInHouse)
  });
  return everyoneName.filter((name)=>{
    return name.includes("A")
  })
}

function peopleNameOfAllHouses() {
  // your code goes here
  let final = {};

  got.houses.forEach((house) => {
    final[house.name] = house.people.map((person) => {
      return person.name;
    });
  });
  return final;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
