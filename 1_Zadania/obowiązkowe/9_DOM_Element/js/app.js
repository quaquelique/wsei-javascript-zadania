document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // Zadanie 0
    function getDatasInfo(elements)
    {
        let array = new Array();

        for(let li of elements)
        {
            array.push(li.dataset.color);
        }
        return array;
    }
    console.log(getDatasInfo(links));
    console.log();

    // Zadanie 1
    console.log({ homeElement, childElements, banner, blocks, links });

    for (let block of blocks) console.log(`${block.tagName}, ${block.className}`);
    for (let childElement of childElements) console.log(`${childElement.tagName}, ${childElement.className}`);
    for (let link of links) console.log(`${link.tagName}, ${link.className}`);
    console.log();

    // Zadanie 2
    for (let block of blocks)
    {
        console.log(block.innerHTML);
        console.log(block.outerHTML);
        block.innerHTML = 'Nowa wartosc diva o klasie blocks';
        console.log(block.innerHTML);
    }

    // Zadanie 3
    const footer = document.querySelector('#mainFooter');

    function getId(element)
    {
        return element.id;
    }
    console.log(getId(footer));

    // Zadanie 4
    function getTags(elements)
    {
        let tags = new Array();
        for (let element of elements)
        {
            tags.push(element.tagName);
        }
        return tags;
    }
    console.log(getTags(childElements));

    // Zadanie 5
    function getClassInfo(element)
    {
        return element.className;
    }
    console.log(getClassInfo(banner));

    // Zadanie 6
    let lisInNavs = document.querySelectorAll('nav li');
    function setDataDirection(elements)
    {
        for (let e of elements)
        {
            if (!e.hasAttribute('data-direction'))
                e.setAttribute('data-direction', 'top');
        }
    }
    setDataDirection(lisInNavs);
    console.log(lisInNavs);
});
