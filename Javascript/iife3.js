// ******************

console.log("iife3.js");



var chatty = (function (deleteChatty){

    debugger;

    var msgDltBtn = document.createElement("button");        
    
    msgDltBtn.innerHTML = "Delete";
    msgDelete = msgDltBtn.name;

    msgDltBtn.addEventListener("click", function(event){

    
            //this = song and dance
            let card = this.parentNode;
            output.removeChild(card);

        });
        return deleteChatty;
})(chatty || {});