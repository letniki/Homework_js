//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x= +prompt('Введіть значення X');
if ( x !== 0){
    console.log('Вірно');
} else{
   console.log('Невірно')
}




//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).



let time= +prompt('Введіть число від 0 до 59');
if(0<=time && time<15){
    console.log('число потрапило в першу чверть')
} else if(15<=time && time<30) {
    console.log('число потрапило в другу чверть');
} else if(30<=time && time<45) {
    console.log('число потрапило в третю чверть');
} else if(45<=time && time<=59) {
    console.log('число потрапило в четверту чверть');
} else {
    console.log('такого числа немає на циферблаті');
}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


let day= +prompt('Введіть число від 1 до 31');
if (1<=day && day<=10){
    console.log('число потрапило у першу декаду місяця');
}   else if (day > 10 && day <= 20){
    console.log('число потрапило у другу декаду місяця');
}   else if (day > 20 && day <= 30){
    console.log('число потрапило у третю декаду місяця');
}   else if (day===31){
    console.log('число потрапило у четверту декаду місяця');
}else{
    console.log('такого дня місяця не існує')
}


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


let a=+prompt('введіть номер дня');

switch(a){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break
    default:
        console.log('Такого номеру дня не існує');
}



// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let firstNum =+prompt('Введіть перше число');
let secondNum=+prompt('Введіть друге число');
if (firstNum>secondNum){
    console.log(firstNum);
} else if(secondNum>firstNum){
console.log(secondNum);
} else if(firstNum===secondNum){
    console.log('Ви ввели однакові значення: '+firstNum);
} else{
    console.log('Не можливо порівняти два числа????');
}


//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let secondX= "";
if(!!secondX === false){
    let secondX="default";
    console.log(secondX);
}else {
    console.log('значення x приводиться до true')
}



//  - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//  За допомоги іф перевірити кожен його елемент на тривалість навчання.
//  У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

    if (coursesAndDurationArray[0].monthDuration > 5) {
        console.log("Супер");
    }
    if (coursesAndDurationArray[1].monthDuration > 5) {
        console.log("Супер");
    }
    if (coursesAndDurationArray[2].monthDuration > 5) {
        console.log("Супер");
    }
    if (coursesAndDurationArray[3].monthDuration > 5) {
        console.log("Супер");
    }
    if (coursesAndDurationArray[4].monthDuration > 5) {
        console.log("Супер");
    }
    if (coursesAndDurationArray[5].monthDuration > 5) {
        console.log("Супер");
    }