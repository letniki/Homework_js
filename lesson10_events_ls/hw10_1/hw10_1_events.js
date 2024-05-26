// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const form = document.forms.f1;

form.onsubmit = function (e) {
    e.preventDefault();

    let div = document.createElement('div');
    let name = document.createElement('div');
    let surname = document.createElement('div');
    let age = document.createElement('div');

    name.innerText = `Name: ${this.name.value}`;
    surname.innerText = `Surname: ${this.surname.value}`;
    age.innerText = `Age: ${this.age.value}`;
    div.append(name, surname, age);
    if(JSON.parse(this.age.value)>0) {
    document.body.appendChild(div);
}
}