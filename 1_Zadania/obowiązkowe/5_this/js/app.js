// 5. this

// Zadanie 0
{
    var car = {
        brand: "Mercedes",
        color: "Czarny",
        numberOfKilometers: 0,

        printCarInfo: function()
        {
            console.log(`${this.color} ${this.brand}, ${this.numberOfKilometers}km`);
        },
        drive: function(km)
        {
            this.numberOfKilometers += km;
        }
    };
    car.printCarInfo();
    car.drive(20);
    car.printCarInfo();
    console.log();
}

// Zadanie 1
{
    car.inspections = ["2010", "2013", "2014"];

    car.addInspection = function (input)
    {
        this.inspections.push(input);
    };

    car.getInspections = function ()
    {
        return this.inspections;
    };


    car.addInspection("2018");
    console.log(car.getInspections());
    console.log();
}

// Zadanie 2
{
    let calculator = {
        save: function (newA, newB) {
            this.a = newA;
            this.b = newB;
        },

        sum: function ()
        {
            return this.a + this.b;
        },

        multiply: function ()
        {
            return this.a * this.b;
        }
    };

    calculator.save(2, 3);
    console.log(calculator.sum());
    console.log(calculator.multiply());
    console.log();
}

// Zadanie 3
{
    let stairs = {
        step: 0,
        up: function ()
        {
            ++this.step;
        },
        down: function ()
        {
            --this.step;
        },
        printStep: function ()
        {
            console.log(this.step);
        }
    };
    stairs.up();
    stairs.up();
    stairs.up();
    stairs.down();
    stairs.printStep();
    console.log();
}