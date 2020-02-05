
//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
const name = "Agata";
// name = 'Witold'; // nie można nadpisać stałej


//TODO:
//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray
const simpleArray = [1, 2, 3, 4];
// simpleArray = new Array(); // nie można nadpisać stałej
simpleArray.unshift(0);
simpleArray[0] = 1;
console.log(simpleArray);


//TODO:
//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//b) spróbuj zmienić właśność skill obiektu dog
//c) spróbuj dodać nową własność do obiektu dog np. age
const dog = {
    name: "Puszek",
    skill: "killing"
};
// dog = { type: 'jamnik' }; // nie można nadpisać stałej
dog.skill = 'sleeping';
dog.age = 10;
console.log(dog);
