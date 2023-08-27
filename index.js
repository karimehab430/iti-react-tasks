function openTypingWindow() {
  var typingWindow = window.open("", "", "width=400,height=200");

  typingWindow.document.write("<p id='typingMessage'></p>");

  var messageElement = typingWindow.document.getElementById("typingMessage");
  var message = "Typing message...";

  var i = 0;
  setInterval(function () {
    if (i < message.length) {
      messageElement.innerHTML += message.charAt(i);
      i++;
    } else {
      setTimeout(function () {
        typingWindow.close();
      }, 3000);
    }
  }, 100);
}
