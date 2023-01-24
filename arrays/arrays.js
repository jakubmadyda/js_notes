// const data = [
//     {
//         name: 'pawel',
//         age: 37,
//         city: 'krakow',
//         hobbies: ['js', 'python', 'drugs']
//     },
//     {
//         name: 'Filip',
//         age: 20,
//         city: 'krakow',
//         hobbies: ['js', 'sleep', 'eat']
//     },
//     {
//         name: 'andrzej',
//         age: 32,
//         city: 'krakow',
//         hobbies: ['programming','banjo','guitar']
//     },
//     {
//         name: 'maciek',
//         age: 35,
//         city: 'katowice',
//         hobbies: ['alcohol', 'programing', 'cars']
//     },
//     {
//         name: 'bartek',
//         age: 21,
//         city: 'Drogomyśl',
//         hobbies: ['strusie', 'js']
//     },
//     {
//         name: 'oliver',
//         age: 20,
//         city: 'krakow',
//         hobbies: ['technology', 'music production', 'bajking 🚴🏻']
//     },
//     {
//         name: 'jakub',
//         age: 20,
//         city: 'krakow',
//         hobbies: ['gaming', 'alcohol', 'sleeping']
//     },
//     {
//         name: 'maria',
//         age: 24,
//         city: 'warsaw',
//         hobbies: ['books', 'volleyball', 'programming']
//     }
// ]

// najszybsza
//
// function avgAge(items){
//     let totalAge = 0;
//
//     for (const item of items) {
//         totalAge += item.age;
//     }
//
//     return totalAge / items.length
// }
// console.log(avgAge(data))

// najbardziej optymalna
//
// function avgAge(persons){
//     return persons.reduce((acc, ce) => acc + ce.age, 0) / persons.length
// }

// poprzednia rozbita na dwie części
//
// function avgAge(persons) {
//     const ages = persons.map((person) => person.age);
//
//     return ages.reduce((acc, ce) => acc + ce) / persons.length
// }


// function avgAgePeopleFromKrakow(items){
//     let totalAge = 0;
//     let counter = 0;
//
//     for (let i = 0; i < items.length; i++){
//         if (items[i].city.toLowerCase() === 'krakow'){
//             counter++;
//             totalAge += items[i].age;
//         }
//     }
//
//     return totalAge / counter;
// }

// console.log(avgAgePeopleFromKrakow(data));

// function avgAgeKrakow(persons) {
//     const personsKrakow = persons.filter((person) => person.city.toLowerCase() === 'krakow');
//
//     return personsKrakow.reduce((acc, ce) => acc + ce.age, 0) / personsKrakow.length;
// }

// nie optymalne, 3 pętle zamiast 2
// function avgAgeKrakow(persons) {
//     return persons
//         .filter((person) => person.city.toLowerCase() === 'krakow') //chaining
//         .reduce((acc, ce) => acc + ce.age, 0) /
//         persons.filter((person) => person.city.toLowerCase() === 'krakow').length;
// }



// function getAllNames(elements){
//     const names = [];
//     let index = 0;

//     while (index < elements.length){
//         names.push(elements[index].name);
//         index++;
//     }
//     return names;
// }
// console.log(getAllNames(data));

// function getAllNames(persons) {
//     return persons.map((person) => person.name)
// }

// const getAllNames = (persons) => persons.map((person) => person.name)

const getAllNames = (persons) => persons.map((person) => capitalize(person.name))



// function capitalize(name){
//     return name[0].toUpperCase() + name.slice(1);
// }

const capitalize = (name) => name[0].toUpperCase() + name.slice(1)

// function getPeopleWhoLovesJS(elements){
//     const names = [];
//
//     for (const element of elements){
//         if (element.hobbies.includes('js')){
//             names.push(capitalize(element.name));
//         }
//     }
//     return names.join(', ');
// }

// const getPeopleWhoLovesJs = (elements) => {
//     const getPeopleWhoLovesJs = elements.filter((element) => element.hobbies.includes('js'))
//     return getPeopleWhoLovesJs.map((element) => capitalize(element.name)).join(', ')
// }

// const getPeopleWhoLovesJs = (elements) => elements
//     .filter((element) => element.hobbies.includes('js'))
//     .map((element) => capitalize(element.name))
//     .join(', ')

// const getPeopleWhoLovesJs = (elements) => elements
//     .reduce((acc, ce) => ce.hobbies.includes('js') ? acc + capitalize(ce.name) + ', ' : acc, "")
//     .slice(0, -2)

// console.log(getPeopleWhoLovesJS(data))

// function getAgeOfPeopleWithNameLengthGreaterThan5(persons) {
//     const ageArray = [];

//         for (let i = 0; i < persons.length; i++){
//             if (persons[i].name.length > 5){
//                 ageArray.push(persons[i].age);
//             }
//         }
//         return ageArray;
// }

// const getAgeOfPeopleWithNameLengthGreaterThan5 = (persons) => persons
//     .filter((person) => person.name.length > 5)
//     .map((person) => person.age)


//     for (const person of persons) {
//         if (person.name.length > 5) {
//             ageArray.push(person.age);
//         }
//     }
//     // return ageArray;
// }

// console.log(getAgeOfPeopleWithNameLengthGreaterThan5(data));

// częściowo imperatywna
// const checkIfNameExist = (items, name) => {
//     for (const item of items) {
//         if (item.name.toLowerCase() === name.toLowerCase()){
//             return true
//         }
//     } return false
// }

// deklaratywna
// const checkIfNameExists = (items, name) => items
//     .filter((item) => item.name.toLowerCase() === name.toLowerCase())
//     .length > 0

// const checkIfNameExists = (items, name) => items
//     .some((item) => item.name.toLowerCase() === name.toLowerCase())

// const checkAdult = (items) => {
//     for (const item of items) {
//         if (item.age <= 18) {
//             return false
//         }
//     } return true
// }


// const checkAdult = (items) => items
//     .every((item) => item.age >= 18)

// const checkAdult = (items) => !items
//     .some((item) => item.age < 18)

// const getAllHobbies = (items) => {
//     const HobbiesArray = []
//
//     for (const item of items) {
//         for (const hobby of item.hobbies){
//             HobbiesArray.push(hobby)
//         }
//     }return HobbiesArray
// }

// const getAllHobbies = (items) => items
//     .map((item) => item.hobbies)
//     .flat()

// const getAllHobbies = (items) => items
//     .flatMap((item) => item.hobbies)

// const getAllHobbies = (items) => items
//     .reduce((acc, ce) => [...acc, ...ce.hobbies], [] )


// const getAllUniqueHobbies = (items) => new Set (items.flatMap((item) => item.hobbies))

// const getAllUniqueHobbies = (items) => items
//     .reduce((acc, ce) => new Set([...acc, ...ce.hobbies]), new Set())

// const x = [{pawel: 20}, {filip, 15}]

// const getCustomObject = (items) => {
//     const result = []
//
//     for (const item of items){
//         let counter = 0
//         for(const hobby of item.hobbies) {
//             counter += hobby.length
//         }
//         result.push({[item.name]: counter})
//     }
//     return result
// }

// const getCustomObject = (items) => items
//     .map((item) => ({
//         [item.name]: item.hobbies.join('').length
//     }))



