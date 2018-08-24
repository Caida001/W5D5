const readline = require('readline');



class TowersOfHanoi {
  constructor() {
    this.towers = [[3,2,1],[],[]];
  }

  run () {

    if (!this.isWon()) {
      this.promptMove(this.move.bind(this));
    } else {
      const reader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      console.log("you won!!");

      reader.question("Do you want to play again?", (response) => {
        reader.close();

        if (response === "yes") {
          this.towers = [[3,2,1], [], []];
          this.run();
        } else {
          return;
        }
      });
    }

  }

  promptMove(callback) {
    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this.towers.forEach( function(tower) {
      console.log(tower);
    });

    reader.question("From what tower do you want to move the disk?", function (startTowerIndex) {
      reader.question("To what tower do you want to move the disk?", function (endTowerIndex) {
        reader.close();
        callback(startTowerIndex, endTowerIndex);
      });
    });
  }

  isValidMove(startTowerIndex, endTowerInex) {
    const fromT = this.towers[startTowerIndex];
    const toT = this.towers[endTowerInex];
    if (startTowerIndex > 2 || startTowerIndex < 0 || endTowerInex > 2 || endTowerInex < 0) {
      return false;
    } else if (fromT.length < 1) {
      return false;
      // console.log(false);
    } else if (toT.length === 0 || (toT[toT.length-1] > fromT[fromT.length-1])) {
      return true;
      // console.log(true);
    } else {
      return false;
      // console.log(false);
    }
  }

  move(startTowerIndex, endTowerInex) {

    if (this.isValidMove(startTowerIndex, endTowerInex)) {
      this.towers[endTowerInex].push(this.towers[startTowerIndex].pop());
    } else {
      console.log("That is not a valid move!");
    }
    // this.promptMove(this.move.bind(this));
    // this.run.call(this);
    this.run();
  }

  isWon () {
    if (this.towers[1].length === 3 || this.towers[2].length === 3){
      return true;
    } else {
      return false;
    }
  }
}

const game = new TowersOfHanoi();

game.run();

// game.promptMove(game.move.bind(game));
// game.isValidMove(0,1); // false
// game.isValidMove(0,2); // true
// game.isValidMove(1,2); // true
// game.isValidMove(2,1); // false
// game.isValidMove(1,0); // true
