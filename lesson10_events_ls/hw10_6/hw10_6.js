// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

let input=document.createElement('input');
let button=document.createElement('button');
let div=document.createElement('div');
button.innerText='click';
input.type='number';
document.body.append(input,button,div);
button.onclick=function (){
    if(input.value>0){
    div.innerText= input.value<18 ? `Ваш вік ${input.value}, вам менше 18 років`:`Ваш вік ${input.value}, вам більше 18 років`;
    }else{
        div.innerText='Ви ввели некоректний вік';
    }
}