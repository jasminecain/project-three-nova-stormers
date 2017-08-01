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
    messageData += '<div id="card">';
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
        
// i = the id for each individual delete button
let i = 0;


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
        
        //this is for the input text that the user inputs
        let messageText = input.value;
        console.log("message text", messageText);

        //declaring where the input will eventually be output
        var output = document.getElementById("output");

        //this is creating the variable that will be housing the input of the user
        var message = document.createElement("p");

        //creating the button that will eventually delete the individual message
        var msgDltBtn = document.createElement("button");

        //Creating the div that will house the html element on line 76
        var cDiv = document.createElement("div");

        //What the button will say and outputting that into the output
        msgDltBtn.innerHTML = "Delete";
        msgDelete = msgDltBtn.name;

            // this is framework variable for us to use "i" and the index/id for the entire kit and kaboodle
        // msgDltBtn.id = i;
        

        //"messageText" is the input that will be housed inside the "message" that will be input into the innerHTML 
        message.innerHTML = messageText;
            //by creating `card ${i}`; we are creating a literal string of the id, cDiv. Because "i" is dynamic, in this case it is refering to line 83.
        // cDiv.id = `card ${i}` ;
        //     // this is incrimenting "i" by one after it has been "valued"
        // i++;

        //Creating the eventListener that will delete the individual message on the message board
        msgDltBtn.addEventListener("click", function(event){
            //this = song and dance
            
            let card = this.parentNode;
            output.removeChild(card);
            

            // //this is finding the card that has the same id as the msgDltBtn
            // let card = document.getElementById(`card ${this.id}`);

            // //to find the index of "card", we convert the nodeList to an array and call indexof"card" into that array.
            // let nodeArray = Array.from(output.childNodes);
            // let cardIndex = nodeArray.indexOf(card);

            // console.log("cardIndex", cardIndex);
            
            // //we then use the index of the card to find that node in the "node list"
            // let cardNode = output.childNodes.item(cardIndex);
            
            // //once we have a reference to that node, we can pass that to remove child within the parent element.
            // output.removeChild(cardNode);


        });

        /****** Creating the array in which all of the users inputs will be placed into ******/



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
