// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

 let squareCounter=(a,b)=>{
    if(a>=0 && b>=0){
        return a*b
    }else{
        return "не правильно задана довжина сторін";
    }
};
console.log(squareCounter(2,4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleSquare=(r)=>{
    if(r>=0){
        return Math.PI*r
    }else {
        return 'довжина радіусу задана не коректно'
    }
};
console.log(circleSquare(4));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinderSquare=(h,r)=>{
    if(h>=0 && r>=0){
        return 2*Math.PI*r*(r+h)
    }else{
        return "значення задані не правильно";
    }
};
console.log(cylinderSquare(4,3));

// - створити функцію яка приймає масив та виводить кожен його елемент
let writer =(arr,i)=>{
    console.log(arr[i]);
    i++;
    if (i<arr.length) {
        writer(arr,i);
    }
}
writer([1,2,3,4,'hello',5],0);

let writer2=(arr)=>{
    for (const element of arr) {
        console.log(element);
    }
}
writer2([0,1,2,3,4])
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraphWriter=(Text='hello')=>document.write(`<p>${Text}</p>`);
paragraphWriter('lorem ipsum');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let listWriter=(Text='hello world')=>{
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++){
        document.write(`<li>${Text}</li>`);
    }
    document.write(`</ul>`);
}
listWriter('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let liWriter=(Text='lorem',count=3)=>{
    if(count>0) {
        document.write(`<ul>`);
        let i = 0;
        while (i < count) {
            document.write(`<li>${Text}</li>`);
            i++;
        }
        document.write(`</ul>`);
    }else{
        document.write('кількість li задана не коректно');
    }
}
liWriter('Hello World',7);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listFromArray = (arr=[1,2,3,4,5])=>{
    document.write(`<ul>`);
    for (const element of arr) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`);
}
listFromArray(['vasya','sasha','petya',1,9,3,true]);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let BlockArr=(arr=[{name: 'vasya', age: 31, id: 1}, {name: 'petya', age: 30,id: 2}])=>{
    for (const element of arr) {
        document.write(`<div>`);
        for (const key in element) {
            document.write(`<p>${key}: ${element[key]}</p>`);
        }
        document.write(`</div>`);
    }
}

let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30,id: 2},
    {name: 'kolya', age: 29,id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29,id: 8},
    {name: 'masha', age: 30,id: 9},
    {name: 'olya', age: 31, id:10},
    {name: 'max', age: 31, id: 11}
];
BlockArr(users);

// - створити функцію яка повертає найменьше число з масиву

let minOfArr=(arr=[1,2,3,4,5,6,7,8,9,10])=>{
    let min=arr[0];
    for (const item of arr) {
        if(item<min){
            min=item;
        }
    }return min;
}
let num=[1,2,3,-2,-7,28];
document.write(`${minOfArr(num)}`);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum=(arr=[1,2,3,4,5])=>{
    let result=0;
    for (const element of arr) {
        if(typeof element==='number'){
            result+=element;
        }else{
            result='не можливо порахувати суму';
            break
        }
    }return result;
}
let nums=[1,2,3,-4,5,-3,2]
console.log(sum(nums));

// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swapper =(arr=[1,2,3,4,5],index1=0,index2=1)=>{
    if(index1>=0 && index1<arr.length && index2>=0 && index2<arr.length && index1!==index2){
        let swap=arr[index1];
        arr[index1]=arr[index2];
         arr[index2]=swap;
        return arr;
    }else{
        return 'Не вірний індекс'
    }
}
console.log(swapper([1,-2,3,-4,5,-6,0],5,4));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange =(sumUAH,currencyValues,exchangeCurrency)=>{
    if(typeof sumUAH==='number' && sumUAH>=0 && typeof exchangeCurrency==='string'){
        for (const element of currencyValues) {
            if(exchangeCurrency===element.currency){
                return sumUAH / element.value;
            }
        }
    }else{
        return 'не правильні вхідні данні';
    }
}

let currencyValues=[
    {currency:'USD',value:40},
    {currency: 'EUR',value: 42},
    {currency: 'GBP', value: 50}
]
console.log(exchange(10000,currencyValues,'USD'));