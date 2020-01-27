/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


// Sygnatura funkcji 'jeden'
function jeden() {

    // Definicja zmiennej 'zmienna1' i przypisanie do niej wartosci '1' typu 'number'.
    var zmienna1 = 1;

    // Sygnatura zagniezdzonej funkcji 'dwa'.
    function dwa() {

        // Instrukcja wypisania na konsoli zmiennej 'zmienna1'.
        console.log(zmienna1);

        // Definicja zmiennej 'zmienna2' i przypisanie do niej wartosci '3' typu 'number'.
        var zmienna2 = 3;
    }

    // Wywolanie funkcji 'dwa'
    dwa();

    // Instrukcja wypisania na konsoli zmiennej 'zmienna2'.
    // NIE DZIALA, poniewaz zmienna 'zmienna2' jest zdefiniowana lokalnie wewnatrz funkcji 'dwa'.
    console.log(zmienna2)
}

// Wywolanie funkcji 'jeden'.
jeden()