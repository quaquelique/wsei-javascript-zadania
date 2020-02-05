let foods = [];

class Food
{
    constructor(name, proteins, carbohydrates, fats)
    {
        this.name = name;
        this.proteins = proteins;
        this.carbohydrates = carbohydrates;
        this.fats = fats;
    }
    print()
    {
        return (`${this.name} | P: ${this.proteins}, C: ${this.carbohydrates}, F: ${this.fats} ` +
                `Cal: ${Food.calories(this.proteins, this.carbohydrates, this.fats)}`);
    }
    static calories(proteins, carbohydrates, fats)
    {
        return proteins * 4 + carbohydrates * 4 + fats * 9;
    }
}
class FatFreeFood extends Food {}
class FastFood extends Food {}

$(document).ready(() =>
    {
        $('#add').click(function(event)
        {
            event.preventDefault();
            var name = $('#name').val();
            var proteins = $('#proteins').val();
            var carbohydrates = $('#carbohydrates').val();
            var fats = $('#fats').val();

            if (Food.calories(proteins, carbohydrates, fats) <= 250)
            {
                foods.unshift(new FatFreeFood(name, proteins, carbohydrates, fats));
            }
            else
            {
                foods.unshift(new FastFood(name, proteins, carbohydrates, fats));
            }

            $('#products').append(`<li>${foods[0].print()}</li>`);
        });
    });
