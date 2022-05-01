let countH=document.getElementById("countH")
let saveEl=document.getElementById("save-el")
let count=0;
function increment(){
    
    count+=1;
    countH.innerText=count;
    console.log(count)
}
function save(){
    let countStr= count + " - ";
    saveEl.innerText+=countStr;
    countH.innerText=0;
    count=0;
}
