document.addEventListener('DOMContentLoaded', () =>
{
    //#0
    {
        const x = 'const';
        let y = 'let';
        var z = 'var';
        {
            let v = 'letInBlock';
            var q = 'varInBlock';
        }

        var run = true;
        while (run)
        {
            // x = 'constL';
            y = 'letL';
            z = 'varL';
            console.log('Wycieczka do pętli: ', x, y, z, q); // v - out of scope
            run = false;
        }
        y = 'let';
        z = 'var';

        var func = (x, y, z, q) =>
        {
            y = 'letF';
            z = 'varF';
            console.log('Wycieczka do funkcji: ', x, y, z, q); // v - out of scope
        };
        func(x, y, z, q); // v - out of scope
        y = 'let';
        z = 'var';
        // v - out of scope

        {
            y = 'letB';
            z = 'varB';
            console.log('Wycieczka do bloku kodu: ', x, y, z, q); // v - out of scope
        }
    }

    //#3
    {
        for (var i = 0; i <= 10; ++i) console.log(i);
        console.log(i);

        for (let j = 0; j <= 10; ++j) console.log(j);
        //console.log(j); // Zmienna została zniszczona przy wyjściu z pętli
    }

    //#5
    (() => console.log('hello world'))();

    //#6
    (name => console.log(name))('Walezy');
});