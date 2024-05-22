let liWriter=(arr,i)=>{
    document.write(`<ul id="xxx"><li>${arr[i]}</li></ul>`);
    i++;
    if(i<arr.length){
        liWriter(arr,i);
    }

}
liWriter([1,2,3,4,5,6,7],0);




function explorer(htmlElement) {
    console.log(htmlElement);
    let children = htmlElement.children;
    if (children.length !== 0) {
       for (const child of children) {
            explorer(child);
        }
    }
}

explorer(document.body);