'use strict';

//Классы - новый способ записывать ф-конструктор с уже готовим ПРОТОТИПОМ
class Car{

    static AAA = 'AAA';     //статические свойства(Object.keys, какие-то константы)
    static description = 'Класс описывающий автомобиль';

    static logInfo(carObj) {                            //статический метод
        console.log('Car.logInfo -> carObj', carObj);

    }

    #test = 'test';     //приватные свойства

    
    mySuperPublicField = 555;        //синтаксис публичных свойств  и методы классов
    //в конструкторе запишется так this.mySuperPublicField=555;

    constructor({ brand, model, price } = {}) {
        console.log('Выполняется constructor');
        console.log(this);
        this.brand = brand;
        this._model = model;
        this.price = price;
    }

    changePrice(newPrice) {         //метод класса
        this.price = newPrice;
    }
    get model() {
        return this._model;
   }
    // getModel() {                    //get и set не могут называться так эе как свойство которое они описывают
    //     return this.model;          //геттер вызывает ф
    // }
    set model(newModel) {                   //get u set это функционал обьекта
        this._model = newModel;
   }
    // setModel(newModel) {
    //     this.model = newModel;
    // }


    updateModel(newModel) {         //метод класса
        this.model = newModel;
    }
}

console.dir(Car);
console.log(Car.description);

const carInstanse = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});
console.log(Object.getPrototypeOf(carInstanse) === Car.prototype);
console.log(carInstanse);
Car.logInfo(carInstanse);
carInstanse.model = 'Q4';   //пойдет в set



