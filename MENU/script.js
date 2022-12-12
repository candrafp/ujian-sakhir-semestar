
window.onscroll - function () {scrollfuncition()};
function scrollfuncition(){
    if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
        document.getElementById("btn").style.display = "block";
    }
    else {
        document.getElementById("btn").style.display = "block";
    }
}
function tofunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
