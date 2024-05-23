let authorNode = document.querySelectorAll('.item-grid-music-preview__author');
let boxNode = document.querySelectorAll('.item-grid-card__meta');
let titleNode = document.querySelectorAll('.item-grid-card__title');
let musicNode = document.querySelectorAll('div.audio-player--music audio');
let arr=[];
for (let i = 0; i < boxNode.length; i++) {
    let obj = {};
    obj['title'] = titleNode[i].innerText;
    obj['author'] = authorNode[i].innerText.substring(authorNode[i].innerText.indexOf('y') + 2);
    obj['mp3']= musicNode[i].currentSrc;
    arr.push(obj);
}
console.log(arr);
