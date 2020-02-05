class MenuGenerator
{
    constructor(type, items)
    {
        this.type = type;
        this.items = items;
    }
    getType()
    {
        console.log(this.type);
    }
    showItems()
    {
        this.items.forEach(x => console.log(x));
    }
    animate()
    {
        console.log('Animacja menu typu: ' + this.type);
    }
}
class HorizontalMenuGenerator extends MenuGenerator
{
    animate()
    {
        console.log('Animacja menu typu: horizontal');
    }
}
class VerticalMenuGenerator extends MenuGenerator
{
    animate()
    {
        console.log('Animacja menu typu: vertical');
    }
}

let hMenuGenerator = new HorizontalMenuGenerator('horizontal', new Array('start', 'about'));
let vMenuGenerator = new VerticalMenuGenerator('vertical', new Array('home', 'contact'));

hMenuGenerator.getType();
hMenuGenerator.showItems();
hMenuGenerator.animate();
vMenuGenerator.getType();
vMenuGenerator.showItems();
hMenuGenerator.animate();