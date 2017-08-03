console.log("chattymain.js");

var chatty = (function(intialChatty){
    var jsonMsg = [];

        let dataRequest = new XMLHttpRequest();

        dataRequest.addEventListener('load', dataRequestComplete);
        dataRequest.addEventListener('error', dataRequestFailed);

        dataRequest.open('GET', 'messages.json');
        dataRequest.send();

        return {
            
            function getInitialJSON() {
                return jsonMsg;
            }

            function setInitialJSON() {
                return jsonMsg;
            }
        }
        
})(chatty || {});
