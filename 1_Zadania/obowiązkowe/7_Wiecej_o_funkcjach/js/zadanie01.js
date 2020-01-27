
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

// Definicja funkcji 'sortArray'.
function sortArray() {

    // Deklaracja i zainicjowanie tablicy 'points'.
    var points = [41, 3, 6, 1, 114, 54, 64];

    // Wywolanie metody array.sort z anonimowa funkcja porownujaca jako parametrem.
    points.sort(function (a, b) {
        // Funkcja zwraca liczbe mniejsza od 0 jesli b > a, dzieki czemu metoda array.sort zapisze 'a' jako pierwszy
        // element, 'b' jako drugi w kolejnosci.
        return a - b;
    });

    // Instrukcja zwracajaca posortowana tablice 'points'.
    return points;
}

// Wywolanie funkcji 'sortArray'
sortArray();

// console.log(sortArray().toString());
