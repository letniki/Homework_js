// *** Створити 3 інпута та кнопку.
// Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let firstInput=document.createElement('input');
let secondInput=document.createElement('input');
let thirdInput=document.createElement('input');
let button=document.createElement('button');
firstInput.type='number';
firstInput.placeholder='rows';
secondInput.type='number';
secondInput.placeholder='columns';
button.innerText='click';
thirdInput.placeholder='some text';
document.body.append(firstInput, secondInput, thirdInput,button);

button.onclick=function () {
    let rows = firstInput.value;
    let columns = secondInput.value;
    let cellText = thirdInput.value;
    let table = document.createElement('table');
    if (Number(rows) > 0 && Number(columns)>0) {
        for (let i = 0; i < Number(rows); i++) {
            let tr = document.createElement('tr');
            for (let i = 0; i < Number(columns); i++) {
                let td = document.createElement('td')
                td.innerText = `${cellText}`;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
        // console.log(row,cell,cellText, typeof secondInput.value);
        // document.body.appendChild(table);
    }else{
        let div=document.createElement('div');
        div.innerText='Перевірте кількість рядків або столбців, не можливо побудувати таблицю';
        document.body.appendChild(div);
    }
}

