// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудуватидом структуру під кожну сессію
let sessions=localStorage.getItem('sessions');
let data=sessions ? JSON.parse(sessions):[];
data.push({date:new Date().toLocaleString()});
localStorage.setItem('sessions', JSON.stringify(data));


