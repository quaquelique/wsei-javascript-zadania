let people = [
    {
        person: "Kim Yoo Suk",
        profession: "tyczkarz"
    },
    {
        person: "Sue Yoo",
        profession: "prawnik"
    },
    {
        person: "Dr. Alden Cockburn",
        profession: "urolog"
    },
    {
        person: "Rusty Kuntz",
        profession: "trener"
    }
];

var setFunnyName = (...args) =>
{
    people.unshift(...args);
};

setFunnyName({person: 'Beata Kozidrak', profession: 'piosenkarz'},
            {person: 'Donald Trump', profession: 'prezydent'},
            {person: 'Noriaki Kasai', profession: 'legenda'});
console.log(people);