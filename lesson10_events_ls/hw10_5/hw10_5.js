// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


let div=document.getElementById('text');
let button=document.getElementById('button');
button.innerText='click';
button.onclick=function(){
    div.classList.toggle('display');
    if(div.classList.contains('display')){
        div.style.display='none';
    }else{
        div.style.display='block';
    }
}
