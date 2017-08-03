console.log("2-IIFE.js");

var chatty = (function (iifechatty2){

    // input.addEventListener("keyup", function(event){
    iifechatty2.inputFun = function() {

        if (event.keyCode === 13) {

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
            msgDltBtn.addEventListener("click", function(event){

                //this = song and dance
                let card = this.parentNode;
                output.removeChild(card);

            });

            //this is running the function that is creating the message
            cDiv.append(message);

            //this is running the function that is creating the delete button for the "card"
            cDiv.append(msgDltBtn);

            //This is outputting all of it 
            output.append(cDiv);

        }

    }

    return iifechatty2;

})(chatty || {});