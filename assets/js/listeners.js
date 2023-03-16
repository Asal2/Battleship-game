//use addEventListeners to listen for
//   ◦ user clicks on the game board and then take the appropriate actions.
//   ◦ restart button clicks to restart the game.

var game = Object.create(gamePlay);

//get the id of the table and takes appropriate actions when clicked
document.querySelector("#exampletable tbody").addEventListener("click", (e) => {
  console.log("Table was clicked on");
  const tableElement = e.target;
  console.log(tableElement.id);
  battleship.makeMove(tableElement.id);

});

//open PlayGame and takes appropriate actions 
if ((window.document.title = "PlayGame")) {
  document.getElementById("reset-el").addEventListener("click", function () {
    game.reset();
  });

  window.addEventListener("load", function () {
    game.playGame();
    setUsername();
  });
}
