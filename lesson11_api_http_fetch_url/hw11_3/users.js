// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
let usersBlock=document.createElement('div');

fetch('http://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then(response=>{
    let users=response;
    console.log(users);

    for(user of users){
        let userContainer=document.createElement('div');
        userContainer.innerText=`${user.id} ${user.name}`;

        let userLink=document.createElement('a');
        userLink.setAttribute('href',`user-details.html?id=${user.id}`);
        userLink.innerText=' click here for more info';

        userContainer.appendChild(userLink);
        usersBlock.appendChild(userContainer);
    }

    document.body.appendChild(usersBlock);
});