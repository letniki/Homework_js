// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let arr= [
    {"id": 1, "value": "Obj 1"},
    {"id": 2, "value": "Obj 2"},
    {"id": 3, "value": "Obj 3"},
    {"id": 4, "value": "Obj 4"},
    {"id": 5, "value": "Obj 5"},
    {"id": 6, "value": "Obj 6"},
    {"id": 7, "value": "Obj 7"},
    {"id": 8, "value": "Obj 8"},
    {"id": 9, "value": "Obj 9"},
    {"id": 10, "value": "Obj 10"},
    {"id": 11, "value": "Obj 11"},
    {"id": 12, "value": "Obj 12"},
    {"id": 13, "value": "Obj 13"},
    {"id": 14, "value": "Obj 14"},
    {"id": 15, "value": "Obj 15"},
    {"id": 16, "value": "Obj 16"},
    {"id": 17, "value": "Obj 17"},
    {"id": 18, "value": "Obj 18"},
    {"id": 19, "value": "Obj 19"},
    {"id": 20, "value": "Obj 20"},
    {"id": 21, "value": "Obj 21"},
    {"id": 22, "value": "Obj 22"},
    {"id": 23, "value": "Obj 23"},
    {"id": 24, "value": "Obj 24"},
    {"id": 25, "value": "Obj 25"},
    {"id": 26, "value": "Obj 26"},
    {"id": 27, "value": "Obj 27"},
    {"id": 28, "value": "Obj 28"},
    {"id": 29, "value": "Obj 29"},
    {"id": 30, "value": "Obj 30"},
    {"id": 31, "value": "Obj 31"},
    {"id": 32, "value": "Obj 32"},
    {"id": 33, "value": "Obj 33"},
    {"id": 34, "value": "Obj 34"},
    {"id": 35, "value": "Obj 35"},
    {"id": 36, "value": "Obj 36"},
    {"id": 37, "value": "Obj 37"},
    {"id": 38, "value": "Obj 38"},
    {"id": 39, "value": "Obj 39"},
    {"id": 40, "value": "Obj 40"},
    {"id": 41, "value": "Obj 41"},
    {"id": 42, "value": "Obj 42"},
    {"id": 43, "value": "Obj 43"},
    {"id": 44, "value": "Obj 44"},
    {"id": 45, "value": "Obj 45"},
    {"id": 46, "value": "Obj 46"},
    {"id": 47, "value": "Obj 47"},
    {"id": 48, "value": "Obj 48"},
    {"id": 49, "value": "Obj 49"},
    {"id": 50, "value": "Obj 50"},
    {"id": 51, "value": "Obj 51"},
    {"id": 52, "value": "Obj 52"},
    {"id": 53, "value": "Obj 53"},
    {"id": 54, "value": "Obj 54"},
    {"id": 55, "value": "Obj 55"},
    {"id": 56, "value": "Obj 56"},
    {"id": 57, "value": "Obj 57"},
    {"id": 58, "value": "Obj 58"},
    {"id": 59, "value": "Obj 59"},
    {"id": 60, "value": "Obj 60"},
    {"id": 61, "value": "Obj 61"},
    {"id": 62, "value": "Obj 62"},
    {"id": 63, "value": "Obj 63"},
    {"id": 64, "value": "Obj 64"},
    {"id": 65, "value": "Obj 65"},
    {"id": 66, "value": "Obj 66"},
    {"id": 67, "value": "Obj 67"},
    {"id": 68, "value": "Obj 68"},
    {"id": 69, "value": "Obj 69"},
    {"id": 70, "value": "Obj 70"},
    {"id": 71, "value": "Obj 71"},
    {"id": 72, "value": "Obj 72"},
    {"id": 73, "value": "Obj 73"},
    {"id": 74, "value": "Obj 74"},
    {"id": 75, "value": "Obj 75"},
    {"id": 76, "value": "Obj 76"},
    {"id": 77, "value": "Obj 77"},
    {"id": 78, "value": "Obj 78"},
    {"id": 79, "value": "Obj 79"},
    {"id": 80, "value": "Obj 80"},
    {"id": 81, "value": "Obj 81"},
    {"id": 82, "value": "Obj 82"},
    {"id": 83, "value": "Obj 83"},
    {"id": 84, "value": "Obj 84"},
    {"id": 85, "value": "Obj 85"},
    {"id": 86, "value": "Obj 86"},
    {"id": 87, "value": "Obj 87"},
    {"id": 88, "value": "Obj 88"},
    {"id": 89, "value": "Obj 89"},
    {"id": 90, "value": "Obj 90"},
    {"id": 91, "value": "Obj 91"},
    {"id": 92, "value": "Obj 92"},
    {"id": 93, "value": "Obj 93"},
    {"id": 94, "value": "Obj 94"},
    {"id": 95, "value": "Obj 95"},
    {"id": 96, "value": "Obj 96"},
    {"id": 97, "value": "Obj 97"},
    {"id": 98, "value": "Obj 98"},
    {"id": 99, "value": "Obj 99"},
    {"id": 100, "value": "Obj 100"}
];


let prev=document.createElement('button');
let next=document.createElement('button');
document.body.append(prev,next);
prev.innerText='click to see previous 10 objects';
next.innerText='click to see next 10 objects';
let page=1;
let objSelector=(page)=>{
let firstDiv=document.createElement('div');
let startIndex =(page-1)*10;
let endIndex=startIndex+10;
if(startIndex>0){
    prev.removeAttribute('disabled');
}else{
    prev.setAttribute('disabled','disabled');
}
if(endIndex>arr.length){
    next.setAttribute('disabled','disabled');
    endIndex=arr.length;
}else{
    next.removeAttribute('disabled');
}
let array=[];
for (let i = startIndex; i < endIndex; i++) {
    let obj=arr[i];
    let item=document.createElement('div');
    let div=document.createElement('div');
    div.innerText=`${obj.id} ${obj.value}`;

    item.appendChild(div);
    array.push(item);
}
firstDiv.replaceChildren(...array);
document.body.appendChild(firstDiv);
}

objSelector(page);
next.onclick=function(){
    objSelector(page+=1);
}

prev.onclick=function (){
    objSelector(page-=1);
}
