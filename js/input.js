let showVar = document.getElementById("show");
let inputVar = document.getElementById("input_text");

let list = [1,2,3,4,5,1,2,3,4,5,6,7,8,9,0,6,7,8,9,0]
let list1 = ['q', 'p', 'w', 'o', 'e', 'i', 'r', 'u', 't', 'y', 'q', 'p', 'w', 'o', 'e', 'i', 'r', 'u', 't', 'y',
    'a', ';', 's', 'l', 'd', 'k', 'f', 'j', 'g', 'h','a', ';', 's', 'l', 'd', 'k', 'f', 'j', 'g', 'h',
    'z', '/', 'x', '.', 'c', ',', 'v','m','b','n']
//如何将标点符号存进list2中
let list2 = [];
let list3 = ['b','p','m','f','d','t','n','l','g','k','h','j','q','x','zh','ch','sh','r','z','c','s','y','w',
    'a','o','e','i','u','v','ai','ei','ui','ao','ou','iu','ie','ve','er','an','en','in','un','vn',
    'ang','eng','ing','ong','zhi','chi','shi',
    'ri','zi','ci','si','yi','wu','yu','ye','yu','yuan','yin','yun','ying']
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

let array = []
array[0] = list;
array[1] = list1
array[2] = list2
array[3] = list3
//如果有很多如何批量解决嘞

let mode = 1;
let count = 1;

// document.body.onkeypress = () =>{
//     setTimeout(isTrue,50)
//
// }

window.setInterval(isTrue,50)


function isTrue(){
    if (inputVar.value!=="" && mode < 3){
        if (showVar.innerText===inputVar.value){
            showVar.changeValue();
            showVar.resetColor()
            inputVar.clear();
        }else{
            showVar.changeColor()
            inputVar.clear();
        }

    }else if (inputVar.value!==""){
        if (showVar.innerText===inputVar.value){
            showVar.changeValue();
            showVar.resetColor()
            inputVar.clear();
        }else{
            // showVar.changeColor()
            // inputVar.clear();
        }
    }
}

showVar.changeValue = () => {
    if (mode < 3){
        showVar.innerText = array[mode][parseInt(count/3)];
        count += 1
        if (count === array[mode].length*3){
            count = 0;
        }
    }else {
        showVar.innerText = array[mode][count];
        count += 1
        if (count === array[mode].length){
            count = 0;
        }
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
}
function bt1(){
    mode  = 0;
    count = 0;
    changeMode();
}
function bt2(){
//重复性的操作
    count = 0;
    mode  = 1;
    changeMode();
}
function bt3(){
    mode  = 2;
    count = 0;
    changeMode();
}
function bt4(){
    mode  = 3;
    count = 0;
    changeMode();
}