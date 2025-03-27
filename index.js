var count=0;
function min(){
    count--;
    document.querySelectorAll("h1")[1].innerText=count;
}
document.querySelectorAll("button")[0].addEventListener("click",min);

function max(){
    count++;
    document.querySelectorAll("h1")[1].innerHTML=count;
}
document.querySelectorAll("button")[2].addEventListener("click",max);

function reset(){
    count=0;
    document.querySelectorAll("h1")[1].innerHTML=count;
}
document.querySelectorAll("button")[1].addEventListener("click",reset);

