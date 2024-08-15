let item = document.querySelectorAll("#item");
item[0].addEventListener("click",function(){
    item[0].className = "item-current";
    item[1].className = "item1";
    item[2].className = "item3";
})
item[1].addEventListener("click",function(){
    item[0].className = "item1";
    item[1].className = "item-current";
    item[2].className = "item3";
})
item[2].addEventListener("click",function(){
    item[0].className = "item1";
    item[1].className = "item3";
    item[2].className = "item-current";
})
