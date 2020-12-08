var menu = document.getElementById("menu");
let status = false;

function menuShow() {
    if (status === false){
        // alert(123z)
        menu.classList.add("inner");
        status = !status;
    }
}

function menuHidden() {
    if (status){
        menu.classList.remove("inner");
        status = !status;
    }
}
