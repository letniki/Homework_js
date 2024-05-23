// пошук всіх авторів

let authorNode = document.querySelectorAll('.item-grid-music-preview__author');
for(const auth of authorNode){
    let author=auth.innerText.substring(auth.innerText.indexOf('y')+2,auth.innerText.length)
    ;console.log(author);
}