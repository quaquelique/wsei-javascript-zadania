document.addEventListener('DOMContentLoaded', () =>
{
    class Vehicle
    {
        constructor(type)
        {
            this.type = type
        }
        write()
        {
            console.log(`This is a ${this.type} unit`);
        }
    }
    class Boat extends Vehicle
    {
        write()
        {
            super.write();
            console.log('This unit allows men to access the seas');
        }
    }
    class Car extends Vehicle
    {
        write()
        {
            super.write();
            console.log('This unit is used to ride on the roads.')
        }
    }
    class Plane extends Vehicle
    {
        write()
        {
            super.write();
            console.log('I"m flying!');
        }
    }

    new Vehicle('blueprint').write();
    new Boat('boat').write();
    new Car('car').write();
    new Plane('plane').write();

    /*-----------------------------------------------------------------------------------------------------------*/

    class Kaczka
    {
        constructor()
        {
            this.typ = 'zwykła kaczka';
        }
        kwacz()
        {
            console.log('kwa kwa');
        }
        plywaj()
        {
            console.log('płynę...')
        }
        wyswietl()
        {
            console.log(`Wygląda jak ${this.typ}`);
        }
        lec()
        {
            console.log('Lecę');
        }
    }

    console.log('/*-----------------------------------------------------------------------------*/');
    var kaczucha = new Kaczka();
    kaczucha.kwacz();
    kaczucha.plywaj();
    kaczucha.wyswietl();
    kaczucha.lec();


    class DzikaKaczka extends Kaczka
    {
        constructor()
        {
            super();
            this.typ = 'dzika kaczka';
        }
    }

    console.log('/*-----------------------------------------------------------------------------*/');
    var dzikaKaczucha = new DzikaKaczka();
    dzikaKaczucha.kwacz();
    dzikaKaczucha.plywaj();
    dzikaKaczucha.wyswietl();
    dzikaKaczucha.lec();


    class KrzyzowkaKaczka extends Kaczka
    {
        constructor()
        {
            super();
            this.typ = 'krzyżówka';
        }
    }

    console.log('/*-----------------------------------------------------------------------------*/');
    var krzyzoKaczucha = new KrzyzowkaKaczka();
    krzyzoKaczucha.kwacz();
    krzyzoKaczucha.plywaj();
    krzyzoKaczucha.wyswietl();
    krzyzoKaczucha.lec();


    class GumowaKaczka extends Kaczka
    {
        constructor()
        {
            super();
            this.typ = 'gumowa kaczka';
        }
        lec()
        {
            console.log('gumowe kaczki nie potrafią latać :(');
        }
    }

    console.log('/*-----------------------------------------------------------------------------*/');
    var gumowaKaczucha = new GumowaKaczka();
    gumowaKaczucha.kwacz();
    gumowaKaczucha.plywaj();
    gumowaKaczucha.wyswietl();
    gumowaKaczucha.lec();
});