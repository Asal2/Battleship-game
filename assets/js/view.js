//addClass(element, className) – adds a given class to an element if it does not have the class. Does nothing otherwise.
//removeClass(element, className) – removes a given class from an element if the class has it. Does nothing otherwise.
//addMessage(msg) – adds a given text (msg) to the message div.
//clearMessages – Removes all messages from the message div.
//markBox(mark) – Adds a mark message to a given game board box

// adds a given class to an element if it does not have the class. Does nothing otherwise
function addClass(element, className) {
  var idel = document.getElementById(element);
  idel.classList.add(className);
}

// removes a given class from an element if the class has it. Does nothing otherwise.
function removeClass(element, className) {
  element.classList.removeClass(className);
}

// adds a given text (msg) to the message div
function addMessage(msg) {
  let messageEl = (document.getElementById("message").innerHTML =
    "<h4> Message: " + msg + "</h4><br>");
  messageEl.innerHTML = msg;
}
// Removes all messages from the message div
function clearMessages() {
  let messages = document.getElementById("message");
  messageEl.innerHTML = "";
}
// changes the text to shows hit or miss in the gamplay box
function changeText(element, msg) {
  if (element !== null) element.innerHTML = msg;
}

// Adds a mark message to a given game board box
function markBox(element, mark) {
	
}

// Displays username on the game page
function setUsername(username) {
  username = gamePlay.getUsername();
  document.getElementById("userid").innerHTML +=
    "<h4> Username: " + username + "</h4><br>";
}
