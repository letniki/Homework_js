// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str='hello world';
console.log(str.lastIndexOf('d')+1);
let st='lorem ipsum';
console.log(st.lastIndexOf('m')+1);
let strSecond='javascript is cool';
console.log(strSecond.indexOf('l')+1);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str.toUpperCase());
console.log(st.toUpperCase());
console.log(strSecond.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strThird='HELLO WORLD';
console.log(strThird.toLowerCase());
let stringSecond='LOREM IPSUM';
console.log(stringSecond.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strFourth = ' dirty string   '
console.log(strFourth.substring(strFourth.indexOf('d'),strFourth.lastIndexOf('g')+1));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let stringThird='Ревуть воли як ясла повні';
console.log(stringThird.split(' '));


//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr=[10,8,-7,55,987,-1011,0,1050,0];
console.log(arr.map((value)=>''+value));

// або

console.log(arr.map(value => value.toString()));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


// Від меншого до більшого
let nums = [11,21,3];
let sort=nums.sort((a,b)=>a-b)
console.log(sort);

//від більшого до меншого

console.log(nums.sort((a,b)=>b-a));


//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration-a.monthDuration));

// або


console.log(coursesAndDurationArray.sort((a, b) => {
    if (a.monthDuration < b.monthDuration) {
        return 1;
    }
    if (a.monthDuration > b.monthDuration) {
        return -1;
    }
    if (a.monthDuration === b.monthDuration) {
        return 0;
    }
}));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log('курси з тривалістю більше 5 місяців:');

console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


console.log(coursesAndDurationArray.map((value, index) => ({id: index + 1, ...value})));

// описати колоду карт (від 6 до туза без джокерів)
let cards=[
    {cardSuit:'spade', value: '6', color:'black'},
    {cardSuit:'spade', value:'7', color:'black'},
    {cardSuit:'spade', value:'8', color:'black'},
    {cardSuit:'spade', value:'9', color:'black'},
    {cardSuit:'spade', value:'10', color:'black'},
    {cardSuit:'spade', value:'jack', color:'black'},
    {cardSuit:'spade', value:'queen', color:'black'},
    {cardSuit:'spade', value:'king', color:'black'},
    {cardSuit:'spade', value:'ace', color:'black'},
    {cardSuit:'heart', value:'6', color:'red'},
    {cardSuit:'heart', value:'7', color:'red'},
    {cardSuit:'heart', value:'8', color:'red'},
    {cardSuit:'heart', value:'9', color:'red'},
    {cardSuit:'heart', value:'10', color:'red'},
    {cardSuit:'heart', value:'jack', color:'red'},
    {cardSuit:'heart', value:'queen', color:'red'},
    {cardSuit:'heart', value:'king', color:'red'},
    {cardSuit:'heart', value:'ace', color:'red'},
    {cardSuit:'diamond', value:'6', color:'red'},
    {cardSuit:'diamond', value:'7', color:'red'},
    {cardSuit:'diamond', value:'8', color:'red'},
    {cardSuit:'diamond', value:'9', color:'red'},
    {cardSuit:'diamond', value:'10', color:'red'},
    {cardSuit:'diamond', value:'jack', color:'red'},
    {cardSuit:'diamond', value:'queen', color:'red'},
    {cardSuit:'diamond', value:'king', color:'red'},
    {cardSuit:'diamond', value:'ace', color:'red'},
    {cardSuit:'clubs', value:'6', color:'black'},
    {cardSuit:'clubs', value:'7', color:'black'},
    {cardSuit:'clubs', value:'9', color:'black'},
    {cardSuit:'clubs', value:'8', color:'black'},
    {cardSuit:'clubs', value:'10', color:'black'},
    {cardSuit:'clubs', value:'jack', color:'black'},
    {cardSuit:'clubs', value:'queen', color:'black'},
    {cardSuit:'clubs', value:'king', color:'black'},
    {cardSuit:'clubs', value:'ace', color:'black'}];

// - знайти піковий туз
console.log('піковий туз:')

console.log(cards.find(card => (card.cardSuit === 'spade' && card.value === 'ace')));


// - всі шістки
console.log('всі шістки:')
console.log(cards.filter(card => card.value === '6'));

//- всі червоні карти
console.log('всі червоні карти:');
console.log(cards.filter(value => value.color === 'red'));

//- всі буби
console.log('всі буби:');
console.log(cards.filter(value => value.cardSuit === 'diamond'));

//  - всі трефи від 9 та більше
console.log('всі трефи від 9 та більше:');
console.log(cards.filter(card => card.cardSuit === 'clubs' && card.value !== '8' && card.value !== '7' && card.value !== '6'));

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let reducedCards=cards.reduce((accumulator,card)=>{
    if(card.cardSuit==='spade'){
        accumulator['spade'].push(card);
    }else if(card.cardSuit==='diamond'){
        accumulator['diamond'].push(card);
    }else if(card.cardSuit==='heart'){
        accumulator['heart'].push(card);
    }else if(card.cardSuit==='clubs'){
        accumulator['clubs'].push(card);
    }
    return accumulator;
},{spade:[],diamond:[],heart:[],clubs:[]});
console.log(reducedCards);

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter(value => value.modules.includes('sass')));

// --написати пошук всіх об'єктів, в який в modules є docker

console.log(coursesArray.filter(value => value.modules.includes('docker')));