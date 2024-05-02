
// //Масиви та об'єкти
// //- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль


let arr;
arr=[1,2398,355,-4,52,6.4905,7,true,9,'hello'];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.


let book1={
    title: 'Harry Potter and the Philosopher\'s Stone',
    pageCount: 332,
    genre: 'fantasy',
}
let book2={
    title:'The Little Prince',
    pageCount:93,
    genre:'philosophical fiction'
}
let book3={
    title:'The Picture of Dorian Gray',
    pageCount:254,
    genre:'Gothic fiction'
}
console.log(book1);
console.log(book2);
console.log(book3);


//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age

let book4={
    title: 'Harry Potter and the Philosopher\'s Stone',
    pageCount: 332,
    genre: 'fantasy',
    authors:[
        {
            name: 'Joanne Rowling',
            age: 58
        }
    ]
}
console.log(book4);

let book5 = {
    title: '1984',
    pageCount: 93,
    genre: 'philosophical fiction',
    authors: [
        {
            name:'George Orwell',
            age: 46
        }
    ]
}
    console.log(book5);

let book6={
    title:'The Picture of Dorian Gray',
    pageCount:254,
    genre:'Gothic fiction',
    authors:[
        {
            name: 'Oscar Wilde',
            age: 46
        }
    ]
}
console.log(book6);

// інший варіант (Просто спробувати)
authors=[
    {name: 'Joanne Rowling', age: 58},
    {name:'George Orwell', age: 46},
    { name: 'Oscar Wilde', age: 46}
]
book1.writers=authors[0];
console.log(book1);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users=[
    {
        name:'Andrey',
        username:'andru',
        password:'1234567'
    },
    {
        name:'Denis',
        username:'den',
        password:'abcde'
    },
    {
        name:'Oleg',
        username:'oleg_koval',
        password:'Oooleg12'

    },
    {
        name:'Oleksandr',
        username:'sanya',
        password:'sasha2394'

    },
    {
        name:'Ivan',
        username:'vanya',
        password:'ivan123password'
    },
    {
        name:'Maria',
        username:'MariaSidor123',
        password:'maria456pass'
    },
    {
        name: 'John',
        username:'john_smith',
        password:'john123pwd'
    },
    {
        name: 'Mark',
        username:'mark_gus',
        password:'13markg09'
    },
    {
        name:'Tomas',
        username:'tommy0293',
        password:'toom!%098'
    },
    {
        name:'Artur',
        username:'art_sh',
        password:'123 :)'
    }
]
console.log(users[0].password);
console.log(users[1][2]);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати.
// Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу


let temperature1=[
    {
        time: 'morning',
        weekTemps:[10,12,13,15,10,13,12]
    },
    {
        time: 'afternoon',
        weekTemps:[18,16,21,20,15,16,17]
    },
    {
        time: 'evening',
        weekTemps:[17,14,13,18,15,12,16]
    }
]

//інший варіант
let temperature2=[
    {
        day:'Sunday',
        morningTemp: 10,
        afternoonTemp: 18,
        eveningTemp: 17
    },
    {
        day:'Monday',
        morningTemp: 12,
        afternoonTemp: 16,
        eveningTemp: 14
    },
    {
        day:'Tuesday',
        morningTemp: 13,
        afternoonTemp:21,
        eveningTemp:13
    },
    {
        day:'Wednesday',
        morningTemp: 15,
        afternoonTemp: 20,
        eveningTemp: 18
    },
    {
        day:'Thursday',
        morningTemp: 10,
        afternoonTemp:15,
        eveningTemp: 15
    },
    {
      day:'Friday',
        morningTemp:13,
        afternoonTemp:16,
        eveningTemp:12
    },
    {
        day:'Saturday',
        morningTemp:12,
        afternoonTemp:17,
        eveningTemp:16
    }
]