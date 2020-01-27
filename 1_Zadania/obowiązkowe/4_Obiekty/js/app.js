// 4. Obiekty

// Zadanie 0a
{
    const country =
    {
        capital: "Vienna",
        population: 8859992,
        president: "Alexander van der Bellen",
        primeMinisters: ["S. Kurz", "B. Bierlein", "H. Löger"]
    };

    for (let i in country) console.log(country[i]);
    console.log();
}

// Zadanie 0b
{
    let timeMachine =
    {
        shape: "turbo-aerodynamic",
        model: "destroyer2000x",
        date: "2020",
        place: "Poland",

        run: function (date, place)
        {
            this.date = date;
            this.place = place;
            console.log()
        }
    };
    for (let i in timeMachine) console.log(timeMachine[i]);
    timeMachine.run("1800", "France");
    for (let i in timeMachine) console.log(timeMachine[i]);
    console.log();
}

// Zadanie 1
{
    const book =
    {
        title: "The C Programming Language",
        author: "Brian Kernighan & Dennis Ritchie",
        numberOfPages: "Unknown"
    };
    for (let i in book) console.log(book[i]);
    console.log();
}

// Zadanie 2
{
    const person =
    {
        name: "Vladimir",
        age: 44,

        sayHello: function ()
        {
            console.log("hello");
        }
    };
    for (let i in person) console.log(person[i]);
    person.sayHello();
    console.log();
}

// Zadanie 3
{
    const recipe =
    {
        title: "Gulasz",
        servings: 1,
        ingredients: ["beef", "paprika", "tomatoes", "oil", "salt", "pepper", "potatoes", "onion"]
    };
    for (let i in recipe) console.log(i + ": " + recipe[i]);
    console.log();
}

// Zadanie 4
{
    var movie = {
        director: "Peter Jackson",
        writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
        stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
        country: "New Zealand | USA",
        budget: "$93,000,000",
        imdbPoints: 8.8,
        year: 2001,
        time: "2h 58 min",
        category: " Adventure, Drama, Fantasy"
    };
    for (let i in movie) console.log(i + ": " + movie[i]);
    console.log();
}

// Zadanie 5
{
    var animals = [
        {
            type: "cat",
            breed: "persian",
            name: "Tiberius",
            health: [
                {
                    date: "2012-03-03",
                    visitType: "grafting"
                },
                {
                    date: "2015-06-23",
                    visitType: "bowel surgery"
                }
            ]
        },
        {
            type: "Guinea pig",
            breed: "The Rex",
            name: "Marko",
            health: [
                {
                    date: "2015-12-04",
                    visitType: "grafting"
                },
                {
                    date: "2016-03-15",
                    visitType: "ear cleaning"
                }
            ]
        }
    ];
    for (let i = 0; i < animals.length; ++i)
    {
        console.log(animals[i]);
    }
    for (let i in animals)
    {
        console.log(animals[i])
    }
    console.log();
}

// Zadanie 6
{
    var spoon = {
        isExist: true
    }

    var fork = spoon;
    fork.isExist  = false;

    console.log(spoon.isExist); // :O
}