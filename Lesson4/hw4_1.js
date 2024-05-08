// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function squareCounter(a,b){
   if (a>0 && b>0){
    return a * b;
   } else{
       return "довжина сторін задана не коректно";
   }
}
console.log(squareCounter(3,7));

// або

function sqCounter(a,b){
    if (a>0 && b>0) {
        console.log(a * b);
    }else{
        return "довжина сторін задана не коректно";
    }
}
sqCounter(3,2);


//- створити функцію яка обчислює та повертає площу кола з радіусом r

function circleSq(r){
    if (r > 0) {
        return r * Math.PI;
    }else{
        return "довжина радіусу задана не коректно";
    }
}
console.log(circleSq(3));

//Або

function circleSquare(r){
    if(r>0){
        console.log(r*Math.PI);
    }else{
        return "довжина радіусу задана не коректно";
    }
}
circleSquare(6);


//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderSquare(r,h){
    if(r>0 && h>0){
        return 2*Math.PI*r*(r+h);
    }else{
        return "значення задані не правильно";
    }
}
console.log(cylinderSquare(3,2));

// Або

function cylinderSq(r,h){
    if(r>0 && h>0){
        console.log(2*Math.PI*r*(r+h));
    }else{
        return "значення задані не правильно";
    }
}
cylinderSq(2,3);

// створити функцію яка приймає масив та виводить кожен його елемент

function printerArray(arr){
    for (const item of arr) {
        console.log(item);
    }
}
let numbers=[1,2,3,4,5,6,7,8,9,10]
printerArray(numbers);

// створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphWriter (...x){
    document.write(`<p>${x}</p>`);
}
paragraphWriter("Hello World");


// Або

function writer(){
    for (let i = 0; i < arguments.length; i++) {
        document.write(`<p>${arguments[i]}</p>`)
    }
}
writer('hello', 'hi');

// Або
function pCreator(){
        document.write(`<p>${arguments[0]}</p>`);
}
pCreator('some text');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function listWriter(){
   document.write(`<ul>`);
    for (const argument of arguments) {
        document.write(`<li>${argument}</li>`);
    }
    document.write(`</ul>`)
}
listWriter('Patrik','Patrik','Patrik');

// Або

function liWriter(){
    document.write(`<ul>
<li>${arguments[0]}</li>
<li>${arguments[0]}</li>
<li>${arguments[0]}</li></ul>`);
}
liWriter('12345');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list(){
    document.write(`<ul>`);
    for (let i = arguments[1]; i >= 0; i--) {
        document.write(`<li>${arguments[0]}</li>`);
    }
    document.write(`</ul>`);
}
list('lorem ipsum',5);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function listFromArray(array){
    document.write(`<ul>`)
    for (const element of array) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`);
}
let arr=['vasya','petya','igor',1,2,9.26,false];
listFromArray(arr);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function BlockArr(arr){
    document.write(`<div>`)
    for (const element of arr) {
        document.write(`<div style="display: flex">Id: ${element.id} Name: ${element.name} ${element.age} y.o.</div>`);
    }
    document.write(`</div>`);
}
let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30,id: 2},
    {name: 'kolya', age: 29,id: 1},
    {name: 'olya', age: 28, id: 1},
    {name: 'max', age: 30, id: 1},
    {name: 'anya', age: 31, id: 1},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29,id: 1},
    {name: 'masha', age: 30,id: 1},
    {name: 'olya', age: 31, id:1},
    {name: 'max', age: 31, id: 1}
];
BlockArr(users);

// - створити функцію яка повертає найменьше число з масиву

function minOfArray(arr) {
        let min = arr[0];
        let result=0;
    for (let element of arr) {
        if (typeof element==='number'){
            if (element < min) {
                min= element;
                 result=min;
            }
        }else{
            result=`не можливо порівняти числа`; // або можна було не створювати змінну result і присвоїти це значення для min
        }
    }document.write(`${result}`); //тоді тут замість result виводилося б min
}
let num=[1,"",-3,4,5];
minOfArray(num);

// Другий варіант без змінної result

function minOfArr(arr) {
    let min = arr[0];
    for (let element of arr) {
        if (typeof element==='number'){
            if (element < min) {
                min= element;
            }
        }else{
            min='не можливо порівняти числа';
        }
    }document.write(`<p>${min}</p>`);
}
minOfArr(num);

// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr){
    let result=0;
    for (let element of arr) {
        if (typeof element === 'number') {
            result +=element;
        } else {
            result = 'не можливо порахувати суму';
        }
    }
    document.write(`<p> ${result}</p>`);
}
let nums=[1,2,3,4,5];
sum(nums);