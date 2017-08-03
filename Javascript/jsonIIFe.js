console.log("JSONIIFE");

var chatty = (function (jsonChatty){
  
  // let dataRequest = new XMLHttpRequest();

  // dataRequest.addEventListener('load', dataRequestComplete);
  // dataRequest.addEventListener('error', dataRequestFailed);

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
  };

  function dataRequestFailed(event) {
    console.log('dataFailed', event);
  }

})(chatty || {});

// dataRequest.open('GET', 'messages.json');
// dataRequest.send();
