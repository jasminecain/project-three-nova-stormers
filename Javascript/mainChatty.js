console.log("mainChatty.js");

let darkTheme = document.getElementById("checkbox1");
let largeText = document.getElementById("checkbox2");
let bodyBG = document.getElementById("bodyBG");
let input = document.getElementById("inputField");
var output = document.getElementById("output");

let i = 0;

darkTheme.addEventListener("change", function (){
    bodyBG.classList.toggle("darkT");
});

largeText.addEventListener("change", function(){
    bodyBG.classList.toggle("largeT");
});

var chatty = (function(initialChatty){
    let dataRequest = new XMLHttpRequest();
    dataRequest.addEventListener('load', dataRequestComplete);
    dataRequest.addEventListener('error', dataRequestFailed);
    output.innerHTML += messageData;

    dataRequest.open('GET', 'messages.json');
    dataRequest.send();

    console.log("Hey it works, initialChatty", initialChatty)

});

chatty.getJSON;
chatty.addMessages;
