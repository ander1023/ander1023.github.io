let menu = document.getElementById("menu");
let menuBt = document.getElementById("menuButton");
let body = document.body;
let status = false;
body.onload = ()=>{
    setTimeout(
        ()=>{
            body.classList.add("load");
        },150
    )
}
//

body.onmousedown = (event)=> {
    setTimeout(
        ()=>{
            if (status === true) {
                if (event.target === this) {
                } else {
                    menu.classList.remove("inner");
                    menuBt.classList.remove("menuOpen");
                    body.classList.remove("menuOpen")
                    status = !status;
                }


            }
        },50
    )
}
// body.onkeypress = (event)=>{
//     setTimeout(
//         ()=> {
//             if (status === true) {
//                 if (event.keyCode == 27||event.keyCode == 96) {
//                     menu.classList.remove("inner");
//                     menuBt.classList.remove("menuOpen");
//                     body.classList.remove("menuOpen")
//                     status = !status;
//                 }
//
//
//             }
//         },200
//     )
// }

function toggleMenuVisi(){
    if (!status){
        setTimeout(
            ()=>{
            menu.classList.add("inner");
            menuBt.classList.add("menuOpen");
            body.classList.add("menuOpen");
            status = !status;
        },50
        )
    }else{
        menu.classList.remove("inner");
        menuBt.classList.remove("menuOpen");
        body.classList.remove("menuOpen");
        status = !status;
    }
}
setInterval(getScrollHeight(),1000)
function getScrollHeight(){
    var height = document.body.scrollHeight;
    console.log(height);

    return height;
}
function pageTop(){
    scrollTo({
        top : 0,
        behavior:"smooth"
    })
}