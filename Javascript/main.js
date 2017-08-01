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
  let messageDiv = document.getElementById('output');
  let messageData = '';

  for(item in messages) {
    let messageItem = messages[item];
    messageData += '<div>';
    messageData +='<h2>' + messageItem.msgID + '.' + messageItem.msgTxt + '</h2>';
    messageData += '</div>';
  }
  messageDiv.innerHTML += messageData;
}

function dataRequestFailed(event) {
  console.log('dataFailed', event);
}

dataRequest.open('GET', 'messages.json');
dataRequest.send();


//First half of the requirements for the assignment*********/

let darkTheme = document.getElementById("checkbox1");
let largeText = document.getElementById("checkbox2");
let bodyBG = document.getElementById("bodyBG");
let input = document.getElementById("inputField");

/*******This is the Dark Theme*******/
darkTheme.addEventListener("change", function (){
    bodyBG.classList.toggle("darkT");
});

/*******This is the Large Text*******/
largeText.addEventListener("change", function(){
    bodyBG.classList.toggle("largeT");
});


// var chatty = (function() {

// 	return {
// 	};

// })();

//*********** This is the function that runs the "enter" key. ************//

input.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        var chatty = {};
        let messageText = input.value;
        console.log("message text", messageText);
        var output = document.getElementById("output");
        var message = document.createElement("p");
        var msgDltBtn = document.createElement("button");
        msgDltBtn.innerHTML = "Delete";
        msgDelete = msgDltBtn.name;
        var cDiv = document.createElement("div");
        message.innerHTML = messageText;
        cDiv.classList.add("card");
        cDiv.append(message);
        cDiv.append(msgDltBtn);
        output.append(cDiv);
    }
});


// input.addEventListener("keyup", function(event){
//     if (event.keyCode === 13) {
//         var chatty = {};
//         let messageText = input.value;
//         console.log("message text", messageText);
//         var output = document.getElementById("output");
//         var message = document.createElement("p");
//         var msgDltBtn = document.createElement("button");
//         msgDltBtn.innerHTML = "Delete";
//         msgDelete = msgDltBtn.name;
//         var cDiv = document.createElement("div");
//         message.innerHTML = messageText;
//         cDiv.classList.add("card");
//         cDiv.append(message);
//         cDiv.append(msgDltBtn);
//         output.append(cDiv);
//     }
// });





//**********************************************************/

//                  Actual IIFE files

//**********************************************************/



        // Name all of the variables here

// {   

    var chatty = {};
    var output = document.getElementById("output");
    var message = document.createElement("h2");


    output.append(message);
    // output.remove(message);
// }




// {
//     let JSONfiles = [];

//     jason.getJSONfiles = () => {
//         return JSONfiles;
//     }

//     jason.addKind = (whatKind) => {
//         JSONfiles.push(whatKind)
//     }



// }
