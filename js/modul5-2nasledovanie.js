'use strict';

//Наследование
//  - extends 
//  - super

class Hero {
    constructor({ name = 'hero', xp = 0 } = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} получает ${amount} опыта`);
        this.xp += amount;
    }
}

// const mango = new Hero({ name: 'mango', xp: 1000 });        //базовые классы
// console.log(mango);
// mango.gainXp(2000);

class Warrior extends Hero {        //наследование, расширения
    constructor({ weapon, ...restProps }) {
        super(restProps);            //это вызов конструктора Hero в Warrior
        
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} атакует используя ${this.weapon}`);
    }
}

class Berserk extends Warrior {
    constructor({ warcry, ...restProps } = {}) {
        super(restProps);

        this.warcry = warcry;
    }
    babyRage() {
        console.log(this.warcry);
    }
}

class Mage extends Hero {
    constructor({spells, ...restProps } = {}) {    //деструктуризируем -...restProps это {name.xp}
        super(restProps);

        this.spells = spells;
    }

    cast() {
        console.log(`${this.name} что-то там кастует`);
    }
}

const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алибарда' });
console.log(mango);
// console.log(mango.__proto__ === Warrior.prototype);

console.log('Warrior.prototype', Warrior.prototype);    //у Warrior.prototype лежит ссылка на прототип Hero
console.log('Hero.prototype',  Hero.prototype);         //и наоборот, в Hero.prototype лежитт ссылк ана прототип Warrior

mango.attack();
mango.gainXp(1000);

const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });
console.log(poly);

poly.cast();
poly.gainXp(200);

const ajax = new Berserk({
    name: 'ajax',
    xp: 500,
    weapon: 'axe',
    warcry: 'waaaaah',
});
console.log(ajax);
ajax.babyRage();
ajax.attack();
ajax.gainXp();
