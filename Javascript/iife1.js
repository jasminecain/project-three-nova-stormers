// ********load meassages into message area and delete buttons for them**********

console.log("iife1.js");


var chatty = (function(iife1){ 

    let dataRequest = new XMLHttpRequest();

    dataRequest.addEventListener('load', dataRequestComplete);
    dataRequest.addEventListener('error', dataRequestFailed);

    function dataRequestComplete(event) {
    console.log('messages have loaded');
    var messageData = JSON.parse(event.target.responseText);
    console.log('message data', messageData);
    showMsg(messageData);
    }

    function showMsg(messages) {
    let output = document.getElementById('output');
    let messageData = '';

    for(item in messages) {
        let messageItem = messages[item];
        messageData += '<div id="card">';
        messageData +='<p>' + messageItem.msgID + '.' + messageItem.msgTxt + '</p>';
        messageData +='<button value="delete">Delete</button>';
        messageData += '</div>';
    }
    output.innerHTML += messageData;
    }


    // Delete button functionality for JSON dlt Button
    let body = document.querySelector("body");

    body.addEventListener("click", function(event){
        if (event.target.value === "delete") {
                let card = event.target.parentNode;
                console.log("event", card);
                output.removeChild(card);
        }
    });

    function dataRequestFailed(event) {
    console.log('dataFailed', event);
    }

    dataRequest.open('GET', 'messages.json');
    dataRequest.send();


    return iife1;

})(chatty || {});
