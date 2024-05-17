
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id,name,surname,email,phone){

    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
    users.push(this);
}
let users=[];
new User(1,'John','Smith','john.smith@example.com','123-456-78-90');
new User(2,'Mary','Johnson','mary.johnson@example.com','987-654-3210');
new User(3,'David','Williams','david.williams@example.com','456-789-0123');
new User(4,'Sarah','Brown','sarah.brown@example.com','789-012-3456');
new User(5,'Michael','Jones','michael.jones@example.com','234-567-8901');
new User(6,'Jennifer','Davis','jennifer.davis@example.com','567-890-1234');
new User(7,'James','Miller','james.miller@example.com','890-123-4567');
new User(8,'Emily','Wilson','daniel.taylor@example.com','345-678-9012');
new User(9,'Daniel','Taylor','jessica.anderson@example.com','678-901-2345');
new User(10,'Jessica','Anderson','jessica.anderson@example.com','901-234-5678');
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers= users.filter(value => value.id%2===0);
console.log(filteredUsers);


//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedUsers=users.sort((a,b)=>a.id-b.id);
console.log(sortedUsers);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


let clients=[];
class Client{
constructor(id, name, surname, email, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.order = order;
        clients.push(this);
    }
}

new Client(1, 'John', 'Doe', 'john@example.com', ['tomato', 'cucumber', 'potato', 'onion']);
new Client(2,'Bob','Johnson','alice@example.com',['t-shirt','jeans','sneakers']);
new Client(3,'Ivan','Garcia','ivan@example.com',['watch','sunglasses']);
new Client(4,'Emily','Brown','emily@example.com',['jacket','dress']);
new Client(5,'Michael','Wilson','michael@example.com',['headphones','laptop','smartphone']);
new Client(6,'Jessica','Taylor','jessica@example.com',['umbrella']);
new Client(7,'Daniel','Miller','daniel@example.com',['wallet','belt','gloves','scarf','hat']);
new Client(8,'Sarah','Anderson','sarah@example.com',['skirt','blouse','sandals']);
new Client(9,'David','Martinez','david@example.com',['wallet','tie',]);
new Client(10,'Olivia','Garcia','olivia@example.com',['scarf','watch','gloves']);

console.log(clients);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort((a, b) => a.order.length - b.order.length));

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

let Cars=[]
function Car(model,make,year,maxSpeed,volume){
    this.model=model;
    this.make=make;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.volume=volume;
    this.drive=function(){
        return `їдемо на ${this.make} ${this.model} зі швидкістю ${this.maxSpeed} кілометрів на годину`;
    }
    this.info=function(){
        return `model-${this.model}
        \nmake-${this.make}
        \nyear-${this.year}
        \nmaxSpeed-${this.maxSpeed} km/h
        \nvolume-${this.volume}`;
    }
    this.increaseMaxSpeed=function(newSpeed){
        this.maxSpeed +=newSpeed;
        return `${this.model}-${this.maxSpeed} km/h`;
    }
    this.changeYear=function(newYear){
        this.year=newYear;
        return`${this.model}-${this.year}`;
    }
    this.AddDriver=function(driver){
      this.driver=driver;
    }
    Cars.push(this);
}

new Car('Civic', 'Honda', 2022, 180, 1.5);
new Car('Corolla','Toyota',2020,170,1.8);
new Car('Accord','Honda',2021, 200,2.0);
new Car('Golf','Volkswagen',2023,200, 1.4);
new Car('Focus','Ford',2022,185,1.6);
new Car('Sonata','Hyundai',2023,195,2.0);
new Car('Cayenne','Porsche',2023,220,4.0);
new Car('Aventador','Lamborghini',2022,350,6.5);
new Car('Tiguan','Volkswagen',2021,200,2.0);
new Car('Rogue','Nissan',2022,200,2.5);

console.log(Cars);
console.log(Cars[6].drive());
console.log(Cars[8].info());
console.log(Cars[2].increaseMaxSpeed(20));
console.log(Cars[3].changeYear(2020));
console.log(Cars[5].changeYear(2017));
Cars[9].AddDriver({name: 'vasya', age: 27, experience: 4, license:'B'});
console.log(Cars[9]);



// (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


let carsSecond=[];
class CarSecond{
    constructor(model,make,year,maxSpeed,volume) {
    this.model=model;
    this.make=make;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.volume=volume;
    carsSecond.push(this);
    }
    drive(){
        return`Їдемо на ${this.make} ${this.model} зі швидкістю ${this.maxSpeed} кілометрів на годину`;
    }
    info(){
        return`model-${this.model}
        \nmake-${this.make}
        \nyear-${this.year}
        \nmaxSpeed-${this.maxSpeed} km/h
        \nvolume-${this.volume}`
    }
    increaseMaxSpeed(newSpeed){
        this.maxSpeed+=newSpeed;
        return `${this.model}-${this.maxSpeed} km/h`;
    }
    changeYear(newYear){
        this.year=newYear;
        return `${this.model}-${this.year}`;
    }
    addDriver(driver){
        if(driver.age>18 && driver.license){
            this.driver=driver;
        }else if(driver.age<18 || !driver.license){
            console.log(`${driver.name} не має водійських прав або молодше 18 років`)
        }
    }
}
let car1=new CarSecond('CX-5',' Mazda',2022,210,2.5);
let car2=new CarSecond('Fusion', 'Ford', 2019, 180, 1.4);
new CarSecond('CR-V','Honda',2022,190,1.5);
new CarSecond('Tiguan','Volkswagen',2023,200,2.0);
new CarSecond('Outback','Subaru',2023,210,2.5);
new CarSecond('Tucson','Hyundai',2020,200,2.5);
new CarSecond('Camry','Toyota',2022,210,2.5);
console.log(carsSecond);
console.log(car1.drive());
console.log(car1.info());
car2.increaseMaxSpeed(30);
car2.changeYear(2024);
console.log(car2);
let driver1={name:'John',age:34,license:true,category:'B', experience: 3};
let driver2={name:'Denis',age:23, license:false};
car1.addDriver(driver1);
console.log(car1);
car2.addDriver(driver2);


//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
let cinderellas=[]
class Cinderella{
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
        cinderellas.push(this);
    }

}
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}
new Cinderella('Emma',25,36);
new Cinderella('Daria',21,39);
new Cinderella('Victoria',20,38);
new Cinderella('Maria', 29,35);
new Cinderella('Julia',23,38);
new Cinderella('Sophia',24, 35);
new Cinderella('Elena',25,37);
new Cinderella('Alina',22,36);
new Cinderella('Natalia',26,39);
new Cinderella('Irina',27,38);


let prince=new Prince('Charly',21,38);
console.log(prince);
for (const cinderella of cinderellas) {
if(cinderella.size===prince.foundShoe){
console.log(`туфелька підійшла ${cinderella.name} з ${cinderella.size} розміром ноги`);
break
}else{
    console.log(`туфелька не підійшла ${cinderella.name}`);
}
}


let prince2=new Prince('William',30,39);
let foundCinderella=cinderellas.find(cinderella=>cinderella.size===prince2.foundShoe)
console.log(`туфелька підійшла ${foundCinderella.name} з розміром: ${foundCinderella.size}`);


//Через Array.prototype. створити власний foreach, filter, map
Array.prototype.myForEach=function(callback){
    for (const item of this) {
        callback(item);
    }
}

let nums=[1,2,3,4,5,6];
nums.myForEach(num=>console.log(num));

Array.prototype.myFilter = function (callback) {
    let arr = [];
    for (const item of this) {
        if (callback(item)) {
            arr.push(item);
        }
    }
    return arr;
};


console.log(nums.myFilter(num => num % 2 === 0));


Array.prototype.myMap=function(callback){
    let arr=[]
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this));
    }
    return arr;
}

console.log(nums.map(value =>value.toString()));
console.log(nums.myMap(value=>value.toString()));
console.log(nums.map((value, index) => ({id: index + 1, numbers:value})));
console.log(nums.myMap((value, index) => ({id: index + 1, numbers:value})));
