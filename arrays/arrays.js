const data = [
    {
        name: 'pawel',
        age: 37,
        city: 'krakow',
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'Filip',
        age: 20,
        city: 'krakow',
        hobbies: ['js', 'sleep', 'eat']
    },
    {
        name: 'andrzej',
        age: 32,
        city: 'krakow',
        hobbies: ['programming','banjo','guitar']
    },
    {
        name: 'maciek',
        age: 35,
        city: 'katowice',
        hobbies: ['alcohol', 'programing', 'cars']
    },
    {
        name: 'bartek',
        age: 21,
        city: 'Drogomyśl',
        hobbies: ['strusie', 'js']
    },
    {
        name: 'oliver',
        age: 20,
        city: 'krakow',
        hobbies: ['technology', 'music production', 'bajking 🚴🏻']
    },
    {
        name: 'jakub',
        age: 20,
        city: 'krakow',
        hobbies: ['gaming', 'alcohol', 'sleeping']
    },
    {
        name: 'maria',
        age: 24,
        city: 'warsaw',
        hobbies: ['books', 'volleyball', 'programming']
    }
]

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



function getAllNames(elements){
    const names = [];
    let index = 0;

    while (index < elements.length){
        names.push(elements[index].name);
        index++;
    }
    return names;
}

// console.log(getAllNames(data));

function capitalize(name){
    return name[0].toUpperCase() + name.slice(1);
}

function getPeopleWhoLovesJS(elements){
    const names = [];

    for (const element of elements){
        if (element.hobbies.includes('js')){
            names.push(capitalize(element.name));
        }
    }

    return names.join(', ');
}

// console.log(getPeopleWhoLovesJS(data))

function getAgeOfPeopleWithNameLengthGreaterThan5(persons) {
    const ageArray = [];

//         for (let i = 0; i < persons.length; i++){
//             if (persons[i].name.length > 5){
//                 ageArray.push(persons[i].age);
//             }
//         }
//         return ageArray;
// }

    for (const person of persons) {
        if (person.name.length > 5) {
            ageArray.push(person.age);
        }
    }
    return ageArray;
}

// console.log(getAgeOfPeopleWithNameLengthGreaterThan5(data));

