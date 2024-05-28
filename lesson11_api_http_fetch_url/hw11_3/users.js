// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
let usersBlock=document.createElement('div');

fetch('http://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then((users)=>{

    for(const user of users){
        let userContainer=document.createElement('div');
        userContainer.innerText=`${user.id} ${user.name}`;

        userContainer.onclick=function() {
            location.href=`user-details.html?id=${user.id}`;
        }
        usersBlock.appendChild(userContainer);
    }
    document.body.appendChild(usersBlock);
});
