// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i=0; i< 10; i++){
document.write(`<div style="margin-top: 1vh">Lorem ipsum dolor sit amet.</divstyle>`);
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i=0; i < 10; i++){
    document.write(`<div style="margin-top: 1vh">id=${i+1} Hello World</div>`);
}
//можливо треба було вивести як id={i}, але тоді б індекси починались з 0

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let iFirst = 0;
while (iFirst<20){
    document.write(`<h1>Hi, how are you?</h1>`);
    iFirst++;
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let iSecond=0;
while(iSecond<20){
    document.write(`<h1>id=${iSecond+1} Lorem ipsum dolor.</h1>`);

iSecond++;
}

//- Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul></ul>`);
for (let item of listOfItems) {
    document.write(`<li>${item}</li>`);
}

// Або такий варіант

document.write(`<ul></ul>`);
for(let i=0; i<listOfItems.length; i++){
    document.write(`<li style="color:blue">${listOfItems[i]}</li>`);
}


// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let product of products) {
    document.write(`<div class="product-card">
        <h3 class="product-title">${product["title"]}. Price- ${product["price"]} UAH</h3>
        <img src="${product.image}" alt="" class="product-image" style="width: 350px"/>
    </div>`);
}



// за допомоги циклу вивести:
//     - користувачів зі статусом true

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
document.write(`<h2>Користувачі зі статусом true:</h2>`)
  for(let i = 0; i<users.length; i++){
      if(users[i].status===true){
          let user=users[i];
          document.write(`<p>${user.name} ${user.age}</p>`);
      }
  }


// - користувачів зі статусом false

document.write(`<h2>Користувачі зі статусом false:</h2>`);

for (let user of users) {
    if(user.status===false){
        document.write(`<p>${user.name} ${user.age}</p>`);
    }
}

// - користувачів які старші за 30 років

document.write(`<h2>Користувачі які старші за 30 років:</h2>`);

for (let i=0; i<=users.length; i++){
    if(users[i].age>30){

        document.write(`<p>${users[i].name} ${users[i].status}</p>`)
    }

}