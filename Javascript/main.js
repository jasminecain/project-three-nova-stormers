let darkTheme = document.getElementById("checkbox1");
let largeText = document.getElementById("checkbox2");
let bodyBG = document.getElementById("bodyBG");

darkTheme.addEventListener("change", function (){
    bodyBG.classList.toggle("darkT");
});

largeText.addEventListener("change", function(){
    bodyBG.classList.toggle("largeT");
});


