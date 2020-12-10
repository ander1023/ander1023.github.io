
function changeTime(){
    var d = Date.parse("Tue Dec 08 2020 00:58:35 GMT+0800 ");
    var nowD = Date.now();
    var outTime = parseInt((nowD - d)/(60*1000));
    document.getElementById("runAllTime").textContent = "网站运行已经 " + outTime + " 分钟啦";
}
changeTime();

setInterval("changeTime()",10*1000);



function getTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}