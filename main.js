// let user = {
//     name: 'Ivan',
//     age: 22,
//     showInfo(param1, param2){
//         console.log(param1, param2)
//         console.log(`name: ${this.name}, age: ${this.age}`);
//     }
// }

// user.showInfo();

// let person = {
//     name: 'Petro',
//     age: 33,
// };

// let showInfo = user.showInfo.bind(person);
// showInfo();

// user.showInfo.call(person, 'qq', 'zz');
// user.showInfo.call(person, ['qq', 'zz']);

// let person = {
//     eats: true,
//     sleep: true,
// }


// let driver = {
//     firstName: 'Petro',
//     lastName: 'Petriv',
// }

// Object.setPrototypeOf(driver, person)

// console.log('person', person)
// console.log('driver', driver)

// console.log(driver.firstName)
// console.log(driver.eats)

// console.log('driver prototype =>', Object)
// console.log('driver prototype 



// function Car(){
//     console.log('instance created')
// }

// let car1 = new Car();
// let car2 = new Car();

// function Car(mark, model){
//     this.mark = mark;
//     this.model = model;
// }
// Car.prototype.getInfo = function(){
//     console.log(`Mark: ${this.mark}, Model: ${this.model}`)
// }

// let car = new Car('Nissan', 'Juke');
// console.log(car)
// -----------------------------------------------
// function Person(name, surname){
//     this.firstName = name;
//     this.lastName = surname;
// }

// Person.prototype.sleep = function(){
//     console.log('zzzzzz')
// }

// Person.prototype.sayHello = function(){
//     console.log(`Hello, i'm ${this.firstName} ${this.lastName}`)
// }

// function Employee(firstName, lastName, company, position){
//     Person.call(this, firstName, lastName)
//     this.company = company;
//     this.position = position;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.workInfo = function(){
//     console.log(`Company: ${this.company}, position: ${this.position}`)
// }

// let emp = new Employee('Alina', 'Petrova', 'Google', 'dev');
// console.log(emp);
// emp.workInfo();
// emp.sayHello();
// emp.sleep();
// -----------------------------------------------
function Player(){};

Player.prototype.on = function(){
    console.log('Player is On')
};

Player.prototype.off = function(){
    console.log('Player is Off')
};

function CDPlayer(){};

CDPlayer.prototype = Object.create(Player.prototype);
CDPlayer.prototype.constructor = Player;

function MP3Player(){};

MP3Player.prototype = Object.create(CDPlayer.prototype);
MP3Player.prototype.constructor = CDPlayer;

MP3Player.prototype.display = function(){
    console.log(`Display`)
}

let mp3 = new MP3Player();

mp3.on();
mp3.off();
mp3.display()









