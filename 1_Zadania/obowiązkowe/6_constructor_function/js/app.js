// 6. Constructor function

// Zadanie 0
{
    let Basket = function ()
    {
        this.products = [];
        this.sum = 0;
    };
    Basket.prototype.addProduct = function (name, price)
    {
        this.products.push([name, price]);
        this.sum += price;
    };
    Basket.prototype.showBasket = function ()
    {
        console.log(this.products.toString());
        console.log(this.sum);
    };

    let aliceBasket = new Basket();
    aliceBasket.addProduct("pomidor",10);
    aliceBasket.addProduct("arbuz",40);
    aliceBasket.showBasket();

    let bruceBasket = new Basket();
    bruceBasket.addProduct("rice", 10);
    bruceBasket.addProduct("grzyby mun",50);
    bruceBasket.addProduct("tofu",20);
    bruceBasket.showBasket();
}

// Zadanie 1
{
    var Robot = function (name) {
        this.name = name;
        this.isFunctional = true;
    };

    Robot.prototype.sayHi = function (toWho) {
        if (this.isFunctional === true) {                                       // 'this'
            console.log("Robot " + this.name + " greets " + toWho);
        }
        else {
            console.log("Robot " + this.name + " is broken");
        }
    };

    Robot.prototype.changeName = function (newname) {
        console.log("Robot " + this.name + " changes name to " + newname);
        this.name = newname;                                                    // 'this'
    };

    Robot.prototype.fixIt = function () {
        this.isFunctional = true;
        console.log("Robot " + this.name + "was fixed");
    };

    let walter = new Robot("Walter");
    walter.sayHi("Quaquelique");
    walter.changeName("Jacques");
    walter.sayHi("Jacques");
    walter.isFunctional = false;
    walter.sayHi();
    walter.fixIt();
    walter.sayHi();
    console.log();
}

// Zadanie 2
{
    let Calculator = function ()
    {
        this.operations = new Array();
    };

    Calculator.prototype.add = function (num1, num2)
    {
        const result = num1 + num2;
        this.operations.push(`added ${num1} to ${num2} got ${result}`);
        return result;
    };

    Calculator.prototype.multiply = function (num1, num2)
    {
        const result = num1 * num2;
        this.operations.push(`multiplied ${num1} with ${num2} got ${result}`);
        return result;
    };

    Calculator.prototype.subtract = function (num1, num2)
    {
        const result = num2 - num1;
        this.operations.push(`subtracted ${num1} from ${num2} got ${result}`);
        return result;
    };

    Calculator.prototype.divide = function (num1, num2)
    {
        const result = num1 / num2;
        this.operations.push(`divided ${num1} by ${num2} got ${result}`);
        return result;
    };

    Calculator.prototype.printOperations = function ()
    {
        for (let operation of this.operations)
        {
            console.log(operation);
        }
    };

    Calculator.prototype.clearOperations = function ()
    {
        this.operations = new Array();
    };


    let calc = new Calculator();

    calc.add(2, 2);
    calc.multiply(3, 2);
    calc.subtract(2, 4);
    calc.divide(9, 3);
    calc.printOperations();
    calc.clearOperations();
    calc.printOperations();
    console.log();
}