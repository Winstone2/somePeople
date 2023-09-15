const persons = [
    {
        name: 'Person 1',
        age: 32
    },

    {
        name: 'Person 2',
        age: 40
    },
];

if(persons.some(person => {
    return person.age > 35
})) {
    console.log("Found some people!")
}