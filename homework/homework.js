const sada = [
    {
        name: 'Shrek',
        age: 106,
        offsprings: 3,
        city: 'the Swamp',
        hobbies: ['swamp', 'eating']
    },

    {
        name: 'Fiona',
        age: 23,
        offsprings: 3,
        city: 'the Swamp',
        hobbies: ['singing', 'shrek']
    },

    {
        name: 'Donkey',
        age: 22,
        offsprings: 5,
        city: 'Far Far Away',
        hobbies: ['dragons', 'shrek']
    },
    {
        name: 'Dragon',
        age: 1250,
        offsprings: 5,
        city: 'Far Far Away',
        hobbies: ['makeup', 'towers']

    },
    {
        name: 'Lord Farquaad',
        age: 571,
        offsprings: 0,
        city: 'Duloc',
        hobbies: ['power', 'mirrors']

    },
    {
        name: 'Puss in Boots',
        age: 20,
        offsprings: 3,
        city: 'Far Far Away',
       hobbies: ['gazpacho', 'working']
    },
]

// 1. Podaj imiona postaci z najwieksza liczba dzieci



// 2. Podaj imie pradawnego najstarszego stworzenia

const getTheOldestCreature = (elements) => elements
    .map((element) => element.name)
    .sort((elementA, elementB) => elementA.age - elementB.age)

// 3. Podaj imiona postaci, ktore kochaja Shreka

const getPeopleWhoLovesShrek = (elements) => elements
    .filter((element) => element.hobbies.includes('shrek'))
    .map((element) => element.name)
    .join(', ')



