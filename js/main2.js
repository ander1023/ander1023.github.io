let slider = document.getElementById("slider");
let sliderOpen = document.getElementById("sliderOpen");
let sliderClose = document.getElementById("sliderClose");

sliderOpen.onmouseenter = ()=>{
    sliderOpen.classList.add("sliderShow");
    slider.classList.add("show");
}
sliderClose.onclick  = ()=>{
    sliderOpen.classList.remove("sliderShow");
    slider.classList.remove("show");
}