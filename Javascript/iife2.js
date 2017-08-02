

console.log("iife2.js");

var chatty = (function (inputChatty){
   
    var titleArr = [];

    function addOutput ( output ) {
    addOutput.push( output );
    console.log( "msg: " + addOutput.join(", ") );
    }

    // let message = [
    //     {
    //         msg: "Hello World",
    //         id: this.parentNode,
    //     },
    // ];

    let input = document.getElementById("inputField");

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

        //"messageText" is the input that will be housed inside the "message" that will be input into the innerHTML
        message.innerHTML = messageText;

        //Creating the eventListener that will delete the individual message on the message board
      git 

        //this is running the function that is creating the message
        cDiv.append(message);

        //this is running the function that is creating the delete button for the "card"
        cDiv.append(msgDltBtn);

        //This is outputting all of it
        output.append(cDiv);

        //This re-enables clear messages once data is in output
        if (output.children.length > 0) {
            console.log('output length', output.children.length);
            // debugger
            clearMessages.disabled = false;
        }
    }
    
    });



    return inputChatty;   
})(chatty || {});

    let clearMessages = document.getElementById("clearMessages");

clearMessages.addEventListener("click", function(event) {
    document.getElementById("output").innerHTML = "";
//This disables clear message
    if (output.children.length < 1) {
        clearMessages.disabled = true;
    }
});