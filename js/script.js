document.addEventListener("DOMContentLoaded",function(){

    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right")

var slided = 0;
rightButton.addEventListener("click", function () {
    slided -= document.querySelector(".product-item").offsetWidth
    // slided = slided - document.querySelector(".product-item").offsetWidth;
    let calculation = document.querySelector("#slider>.container").offsetWidth - 2 * (document.querySelector(".product-item").offsetWidth)
    if (slided * (-1) < calculation) {
        let slider = document.querySelector("#slider>.container")
        slider.style.transform = `translateX(${slided}px)`
        // slider.style.tranform = "translateX("+slided+"px)"
    } else {
        let slider = document.querySelector("#slider>.container")
        slider.style.transform = `translateX(0px)`
        slided = 0;
    }
})

leftButton.addEventListener("click", function () {
    if (slided != 0) {
        slided += document.querySelector(".product-item").offsetWidth
    }

    
    
    let slider = document.querySelector("#slider>.container")
    slider.style.transform = `translateX(${slided}px)`

})
let womanhover = document.getElementById("womanaboutli");
let vomenreklam = document.getElementById("womenabout");
womanhover.addEventListener("mouseover", function () {
    document.getElementById("womenabout").style.visibility = "visible";
    document.getElementById("womenabout").style.opacity = "1";
    document.getElementById("womenabout").style.transition = "all 0.6s ease-in-out";
    
})
womanhover.addEventListener("mouseout", function () {
    document.getElementById("womenabout").style.visibility = "hidden";
    document.getElementById("womenabout").style.opacity = "0";
    document.getElementById("womenabout").style.transition = "all 0.6s ease-in-out";
})
vomenreklam.addEventListener("mouseover", function () {
    document.getElementById("womenabout").style.visibility = "visible";
    document.getElementById("womenabout").style.opacity = "1";
    document.getElementById("womenabout").style.transition = "all 0.6s ease-in-out";
})
vomenreklam.addEventListener("mouseout", function () {
    document.getElementById("womenabout").style.visibility = "hidden";
    document.getElementById("womenabout").style.opacity = "0";
    document.getElementById("womenabout").style.transition = "all 0.6s ease-in-out";
})


let menhover = document.getElementById("manaboutli");
let menreklam = document.getElementById("menabout");
menhover.addEventListener("mouseover", function () {
    document.getElementById("menabout").style.visibility = "visible";
    document.getElementById("menabout").style.opacity = "1";
    document.getElementById("menabout").style.transition = "all 0.6s ease-in-out";
    
})
menhover.addEventListener("mouseout", function () {
    document.getElementById("menabout").style.visibility = "hidden";
    document.getElementById("menabout").style.opacity = "0";
    document.getElementById("menabout").style.transition = "all 0.6s ease-in-out";
})
menreklam.addEventListener("mouseover", function () {
    document.getElementById("menabout").style.visibility = "visible";
    document.getElementById("menabout").style.opacity = "1";
    document.getElementById("menabout").style.transition = "all 0.6s ease-in-out";
})
menreklam.addEventListener("mouseout", function () {
    document.getElementById("menabout").style.visibility = "hidden";
    document.getElementById("menabout").style.opacity = "0";
    document.getElementById("menabout").style.transition = "all 0.6s ease-in-out";
})

$("#searchp").click(function(){
    $("#searching").show(500,function(){

    });

})
$("#b").click(function(){
    $("#searching").hide(500,function(){

    });
})
})