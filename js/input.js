let showVar = document.getElementById("show");
let inputVar = document.getElementById("input_text");

let list = [1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,]
let list1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//如何将标点符号存进list2中
let list2 = [];


initList2();
function initList2(){
    let count = 0
    let index = 33;
    for (;index<=47;index++){
        list2[count] = String.fromCharCode(index);
        count++
    }
    for (index = 58;index<=64;index++){
        list2[count] = String.fromCharCode(index);
        count++
    }for (index = 91;index<=96;index++){
        list2[count] = String.fromCharCode(index);
        count++
    }
    for (index = 123;index<=126;index++){
        list2[count] = String.fromCharCode(index);
        count++
    }
}
// alert(list2)
let array = []
array[0] = list;
array[1] = list1
array[2] = list2
//如果有很多如何批量解决嘞

let mode = 1;
let count = 0;

document.body.onkeypress = () =>{
    setTimeout(isTrue,50)

}


function isTrue(){
    if (showVar.innerText===inputVar.value){
        showVar.changeValue();
        showVar.resetColor()
        inputVar.clear();
    }else{
        showVar.changeColor()
        inputVar.clear();
    }

}

showVar.changeValue = () => {
    showVar.innerText = array[mode][count];
    count += 1
    if (count === array[mode].length){
        count = 0;
    }
}
showVar.changeColor = () =>{
    showVar.style.color = "pink"
}
showVar.resetColor = ()=>{
    showVar.style.color = "white"
}
inputVar.clear = () => {
    inputVar.value = "";
}
function changeMode(){
    showVar.changeValue();
    showVar.resetColor();
    count = 0;
}
//重复性的操作
function bt1(){
    mode  = 0;
    changeMode();
}
function bt2(){
    mode  = 1;
    changeMode();
}
function bt3(){
    mode  = 2;
    changeMode();
}
