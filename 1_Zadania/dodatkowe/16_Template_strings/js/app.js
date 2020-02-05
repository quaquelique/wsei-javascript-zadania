// #0
var person =
    {
        name: 'Vlad',
        lastName: 'Drăculea',
        yearOfBirth: 1431,
        profession: 'Lord of Wallachia'
    };

var whoAreYou = person => `My name is ${person.name} ${person.lastName}.\n` +
                `I am ${new Date().getFullYear() - person.yearOfBirth} years old.\n` +
                `My profession is ${person.profession}\n`;
console.log(whoAreYou(person));

// #1
var first = 2;
var second = 4;
console.log(`Suma dwóch liczb ${first} i ${second} to: ${first + second}\n`);

// #2
var name = 'Karol';
console.log(`Moje imię i nazwisko to ${name} Makowski\n`);

// #3
console.log('Myślę, że jest wiele piękna\n' +
    'w posiadaniu problemów.\n' +
    'To jeden ze sposobów w jaki się uczymy\n' +
    'Herbie Hancock\n');

// #4
var button =
    {
        value: 'Send message',
        idName: 'sendMsg',
        width: '100px',
        padding: '20px'
    };
console.log('To jest button.\n' +
    `Jego szerokość to ${Number.parseInt(button.width.replace('px', '')) + 40}px\n` +
    `Napis, który na nim widnieje to: "${button.value}"`);