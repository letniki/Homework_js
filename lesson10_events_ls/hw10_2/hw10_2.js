// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
   
    let count=localStorage.getItem('count');
    let div=document.getElementById('count');
    div.innerText=JSON.stringify(Number(count) + 1);
    localStorage.setItem('count', div.innerText);


