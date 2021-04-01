'use strict';

//Прототипное наследование
const objC = {
    z: 5,
};
console.log('objC',objC);

const objB = Object.create(objC);       //это ссылка, создает пустой обьект, прототипом которого то что указываем в скобках
objB.y = 2;
console.log('objB',objB);
// console.log(objB.y);
// console.log(objB.z);
// console.log(objC.hasOwnProperty('z'));      //вернет true если есть такое свойство и наоборот

const objA = Object.create(objB); 
objA.x = 1;
console.log('objA', objA);

console.log(objA.z);
objA.z = 100;
console.log(objA.z);
console.log(objA.hasOwnProperty('y'));      //это не свойство objA, будет false

//след пример
console.log('---next---');
const dummyObj = {
    message: 'Это собственное свойство обьекта',
};

console.log(dummyObj.message);


//Основы ООП: класс, экземпляр(обьеткт), интерфейс
//Функции-конструкторы
const Car = function ({ brand, model, price }) {
    //const {brand,model,price} =config;    - деструктуризация, применена вместо config
//2.Ф вызывается в контексте созданного обьекта, то есть в this записывается ссылка на него 
//4.Ссылка на обьект возвращается в место вызова new Car
    this.brand = brand;
    this.model = model;
    this.price = price;

    // this.changePrice = function (newPrice) {        //меняем цену на машину
    //     this.price = newPrice;                      //на каждый экземпляр делается копия
    // }  
};
//3.В свойство this.__proto__ записывается ссылка на обьект Car.prototype
//то есть Car.prototype это ПРОТОТИП будущего обьетка(экземпляра)
Car.prototype.sayHi = function () {
    console.log('Car.prototype.sayHi -> this', this);
    console.log('Hello :) ');
};

Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
};

console.log(Car.prototype);


//1.Если ф вызывается через new, создается пустой обьект
const myCar = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});
console.log(myCar);     //получаем обьект, который является  экземпляром класса Car
myCar.sayHi();      //this ссылается на myCar
myCar.changePrice(10000);

const myCar2 = new Car({
    brand: 'BMW',
    model: 'X6',
    price: 50000,
});
console.log(myCar2);
myCar2.sayHi();      

//новая задача
console.log('---next---');
const User = function ({ email, password } = {}) {
    this.email = email;
    this.password = password;
};

User.prototype.changeEmail = function (newEmail) {
    this.email = newEmail;
};

const mango = new User({
    email: 'mango@mail.com',
    password: 111111,
});
console.log(mango);

// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойтсве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создается пустой обьект
// 7. Функция вызывается в контексте созданного обьекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype 
// 9. Ссылка на обьект возвращается в место вызова new Функция

console.log('---next 2---');
const objD = {
    x: 5,
};
console.log(objD.__proto__ === Object.prototype);

//Статические свойства и методы
//  - статические свойства и методы достпуны только на самом конструкторе
//  - в статических методах нет this
console.log('---Статические методы---');
User.message = 'Я статическое свойство, меня нет  на экземплярах и  в прототипе';
User.logInfo = function (obj) { };
User.logInfo(mango);
 //Например Object.keys() Object.values()