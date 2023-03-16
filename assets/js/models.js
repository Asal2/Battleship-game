//Author: Nnamdi Nwanze
//Purpose: create ship, and battleship objects for a Battleship game
var boardXsize = 10,
  boardYsize = 10;
var vessels = [
  ["Cruiser", 2],
  ["Submarine", 3],
  ["Destroyer", 4],
  ["Battleship", 5],
];
var ship = {
  name: "", //vessel name
  length: 0, //vessel length
  orientation: "x", //vessel orientation
  hits: 0, //track vessel hits during game play
  //set vessel name
  setName: function (name) {
    this.name = name;
  },
  //get vessel name
  getName: function () {
    return this.name;
  },
  //set vessel length
  setLength: function (length) {
    this.length = length;
  },
  //set vessel orientation
  getLength: function () {
    return this.length;
  },
  //set vessel orientation
  setOrientation: function () {
    let randomOrientation = Math.random();
    if (randomOrientation > 0.5) {
      this.orientation = "x";
    } else {
      this.orientation = "y";
    }
  },
  //get vessel length
  getOrientation: function () {
    return this.orientation;
  },
};

var battleship = {
  board: [],
  //Creates an empty 10 x 10 board
  initialize: function () {
    for (let i = 0; i < boardXsize; i++) {
      this.board.push([]);
      for (let j = 0; j < boardYsize; j++) {
        this.board[i].push("");
      }
    }
  },
  //Given a set of coordinates, orientation and size, it checks to see if a vessel of that length can be placedin that position. If it can, it returns true, if not it returns false.
  canIPlaceShip: function (x, y, orientation, size) {
    console.log("this is xcan: " + x);
    console.log("this is ycan: " + y);

    if (
      (orientation === "x" && x + size >= this.board.length) ||
      (orientation === "y" && y + size >= this.board.length)
    ) {
      return false;
    }

    if (orientation === "x") {
      for (let i = 0; i < size; i++) {
        if (this.board[x + i][y] != "") {
          return false;
        }
      }
      return true;
    } else if (orientation === "y") {
      for (let i = 0; i < size; i++) {
        if (this.board[x][y + i] != "") {
          return false;
        }
      }
      return true;
    }
  },
  //Randomly selects a position to place a ship on the board using the ships orientation (x: horizontal, y: vertical) and marks coordinates with the first letter of the ship name.
  putShip: function (ship) {
    xcodinate = Math.floor(Math.random() * boardXsize);
    ycodinate = Math.floor(Math.random() * boardYsize);
    console.log("this is xco :" + xcodinate);
    console.log("this is yco :" + ycodinate);
    while (
      !this.canIPlaceShip(
        xcodinate,
        ycodinate,
        ship.getOrientation(),
        ship.getLength()
      )
    ) {
      xcodinate = Math.floor(Math.random() * boardXsize);
      ycodinate = Math.floor(Math.random() * boardYsize);
    }
    for (let i = 0; i < ship.getLength(); i++) {
      if (ship.getOrientation() === "x") {
        this.board[xcodinate + i][ycodinate] = ship.getName();
      } else if (ship.getOrientation() === "y") {
        this.board[xcodinate][ycodinate + i] = ship.getName();
      }
    }
  },
  //creates all ship objects with random orientations and calls putShip(ship) to put ships on the board
  createShips: function () {
    //go through vessels
    for (let i = 0; i < vessels.length; i++) {
      //create new vessel
      let newVessel = Object.create(ship);
      //set vessel name
      newVessel.setName(vessels[i][0]);
      //set vessel length
      newVessel.setLength(vessels[i][1]);
      //set random vessel orientation
      newVessel.setOrientation();
      //place vessel on the board
      this.putShip(newVessel);
    }
  },
  //Takes a coordinate parameter and makes a move on the board
  makeMove: function (coordinate) {
    let x = coordinate.slice(0, 1);
    let y = coordinate.slice(2);
    if (this.board[x][y] == "") {
      addMessage("Missed");
      addClass(coordinate, "missed");
      changeText(coordinate,"Missed")
    } else if (this.board[x][y] != "") {
      for (let i = 0; i < vessels.length; i++) {
        if (vessels[i][0] == this.board[x][y]) {
          vessels[i][1] -= 1;
          if (vessels[i][1] <= 0) {
            addMessage("You sunk the ship");
            addClass(coordinate, vessels[i][0]);
          } else {
            addMessage("hit");
            addClass(coordinate, vessels[i][0]);
            this.board[x][y] = ""
            
          }
        }
      }
    }
    if(game.isGameOver()){
        addMessage("Game Over!!!!")
    }
  },
};
