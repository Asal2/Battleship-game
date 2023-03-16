var gamePlay = {
  play: new Object(battleship),
  // gets then returns the username
  getUsername: function () {
    var links = window.location.href;
    var splitlink = links.split("=");
    var takeName = splitlink[1];
    return takeName;
  },

  // uses it’s Battleship member to setup and start a game
  playGame: function () {
    this.play.initialize();
    this.play.createShips();
  },

  // If all ships are marked, it adds a “Game over” message to the message div.
  isGameOver: function () {
    let count = 0;
    for (let i = 0; i < vessels.length; i++) {
      if (vessels[i][1] == 0) {
        count += 1;
      }
    }
    if (count == 4) {
      return true;
    }
    return false;
  },

  // Resets the game board, resets the message div and starts a new game.
  reset: function () {
    window.location.reload();
  },
};
