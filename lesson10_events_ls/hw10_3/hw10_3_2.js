let sessions=localStorage.getItem('sessions');
let data=sessions ? JSON.parse(sessions):[];
for (const element of data) {
    let div=document.createElement('div');
    div.innerText=element.date;
    document.body.appendChild(div);
}