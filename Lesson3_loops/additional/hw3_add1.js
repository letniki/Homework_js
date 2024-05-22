// --створити масив з:
// - з 5 числових значень

let arr=[];
for (let i=1; i <=5; i++){
arr[arr.length]=i;
}
console.log(arr);

//- з 5 стічкових значень
let arr2=[];
let iFirst=1;
while (iFirst<=5){
    arr2[arr2.length]=`${iFirst}`;
    iFirst++;
}
console.log(arr2);




console.log('Завдання 1');
//- є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
let arr3=[2,17,13,6,22,31,45,66,100,-18];
let iSecond=0
while(iSecond<arr3.length){
    console.log(arr3[iSecond]);
    iSecond++;
}


console.log('Завдання 2');

//2. перебрати його циклом for
for(let i=0; i<arr3.length; i++){
    console.log(arr3[i]);
}


console.log('Завдання 3');
//3. перебрати циклом while та вивести  числа тільки з непарним індексом

let iThird=0;
while(iThird<arr3.length){
    if(iThird%2 === 1){
        console.log(arr3[iThird]);
    }
    iThird++;
}


console.log('Завдання 4');
//4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i<arr3.length; i++){
    if(i%2===1){
        console.log(arr3[i]);
    }
}


console.log('Завдання 5');
//5. перебрати циклом while та вивести  числа тільки парні  значення

let iFourth=0;
while(iFourth<arr3.length){
    if(arr3[iFourth]%2===0){
        console.log(arr3[iFourth]);
    }
    iFourth++;
}

console.log('Завдання 6');
//6. перебрати циклом for та вивести  числа тільки парні  значення

for(let i=0; i <arr3.length; i++){
    if(arr3[i]%2===0){
        console.log(arr3[i]);
    }
}


console.log('Завдання 7');
//7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < arr3.length; i++) {
    if(arr3[i]%3===0){
        arr3[i]="okten";
    }
}
console.log(arr3);

console.log("Завдання 8");
//8. вивести масив в зворотньому порядку.
let arr4=[];
let a=0;
for(let i=arr3.length-1; i>=0; i--){
    arr4[a]=arr3[i];
    a++
}
console.log(arr4);

console.log('');
//з циклом while
let iFifth=arr3.length-1;
let b =0;
let arr5=[];
while(iFifth>=0){
    arr5[b]=arr3[iFifth];
    iFifth--;
    b++
}
console.log(arr5);