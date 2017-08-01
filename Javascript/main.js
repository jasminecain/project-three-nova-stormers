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
    messageData += '<div class="card">';
    messageData +='<p>' + messageItem.msgID + '.' + messageItem.msgTxt + '</p>';
    messageData +='<button>Delete</button>';
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



//*********** This is the function that runs the "enter" key. ************//

input.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        var chatty = {};
        
        // i = the id for each individual delete button
        let i = 0;

        //this is for the input text that the user inputs
        let messageText = input.value;
        console.log("message text", messageText);

        //declaring where the input will eventually be output
        var output = document.getElementById("output");

        //this is creating the variable that will be housing the input of the user
        var message = document.createElement("p");

        //creating the button that will eventually delete the individual message
        var msgDltBtn = document.createElement("button");

        //What the button will say and outputting that into the output
        msgDltBtn.innerHTML = "Delete";
        msgDelete = msgDltBtn.name;

        //Creating the div that will house the html element on line 76
        var cDiv = document.createElement("div");

        //"messageText" is the input that will be housed inside the "message" that will be input into the innerHTML 
        message.innerHTML = messageText;
        cDiv.classList.add("card");

        //Creating the eventListener that will delete the individual message on the message board
        // msgDltBtn.addEventListener("click", function(event){
        //     cDiv.removeChild(cDiv.);
        // })

        //this is running the function that is creating the message
        cDiv.append(message);

        //this is running the function that is creating the delete button for the "card"
        cDiv.append(msgDltBtn);

        //This is outputting all of it 
        output.append(cDiv);

    }
});


/******** This is the function to clear everything within the messageboard *********/
let clearMessages = document.getElementById("clearMessages");

clearMessages.addEventListener("click", function(event){
        document.getElementById("output").innerHTML = ""; 
     
});


/********* This is the function for the individual delete button *********/

// let dltMsg = document.getElementById("dltBtn");

// dltMsg.addEventListener("click", function(event){  
//     document.getElementById("card").innerHTML = "";
// });












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
