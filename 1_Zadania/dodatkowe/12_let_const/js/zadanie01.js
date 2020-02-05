//I. Sprawdź najpierw zasięg let
{
    //A1 - wypisuję zmienną numbers przed deklaracją
    //Wynik w konsoli to TODO: ReferenceError: can't access lexical declaration `numbers' before initialization
    //Dlaczego taki wynik? TODO: Zmienna numbers nie została jeszcze utworzona
    //console.log(numbers);

    let numbers = [2, 3, 4];

    //A2 - wypisuję zmienną numbers po deklaracji
    //Wynik w konsoli to TODO: Array(3) [ 2, 3, 4 ]
    //Dlaczego taki wynik? TODO: Poprawne działanie - zmienna 'let' zadeklarowana w tym samym bloku kodu, przed wywołaniem.
    console.log(numbers);
}

//A3 - wypisuję zmienną numbers za blokiem
//Wynik w konsoli to TODO: ReferenceError: numbers is not defined
//Dlaczego taki wynik? TODO: Zadeklarowanie zmiennej przy użyciu 'let' sprawia że jest ona niszczona przy wyjściu z bloku kodu.
//console.log(numbers);



//II. Sprawdź teraz  zasięg const
{
    //A1 - wypisuję zmienną PI przed deklaracją
    //Wynik w konsoli to TODO: ReferenceError: can't access lexical declaration `PI' before initialization
    //Dlaczego taki wynik? TODO: Stała PI nie została jeszcze utworzona
    //console.log(PI);

    const PI = 3.14;

    //A2 - wypisuję zmienną PI po deklaracji
    //Wynik w konsoli to TODO: 3.14
    //Dlaczego taki wynik? TODO: Poprawne działanie - stała 'const' zadeklarowana w tym samym bloku kodu, przed wywołaniem.
    console.log(PI);
}

//A3 - wypisuję zmienną PI za blokiem
//Wynik w konsoli to TODO: ReferenceError: PI is not defined
//Dlaczego taki wynik? TODO: Zadeklarowanie stałej przy użyciu 'const' sprawia że jest ona niszczona przy wyjściu z bloku kodu.
//console.log(PI);
