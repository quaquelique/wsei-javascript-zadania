document.addEventListener('DOMContentLoaded', function ()
{
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});

/*
 * .js w <head> - error - strona nie zdaza sie zaladowac przez co js nie moze korzystac z elementow dokumentu.
 * DOMContentLoaded - sprawia ze wszystko dziala hamujac wykonanie js do pelnego zaladowania dokumentu.
 * .js na koncu pliku - nie ma znaczenia, ze wzgledu na to ze DOMContentLoaded wciaz dziala.
 */