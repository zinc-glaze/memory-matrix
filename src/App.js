import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import TileWrapper from "./components/TileWrapper";
import GameTiles from "./components/GameTiles";
import tiles from "./tiles.json";


class App extends Component {

  state = {
    tiles,
    tileClass: "card",
    messageClass: "nav-text",
    message: "Click a tile to start!",
    score: 0,
    highScore: 0,
  };

  resetGame = () => {
    this.state.tiles.map(tile => tile.clicked = false);
    this.setState({ 
      tiles,
      tileClass: "card",
      messageClass: "nav-text",
      message: "Click a tile to start!",
      score: 0,
    });
  };

  //Handle Tile Click
  tileClicked = (id, synth, clicked) => {
    //if the tile has already been clicked
    if (clicked === true) {
      //message user, set high score, reset game after pause
      this.setState({ message: "Already Clicked! Try Again!", tileClass: "card wobble-hor-bottom", messageClass: "nav-text vibrate-1" });
      if (this.state.score > this.state.highScore) {
        this.state.highScore = this.state.score; 
      }
      setTimeout(() => {
        this.resetGame();
      }, 2500);
    }
    //if the tile has not been clicked
    else if (clicked === false) {
      //set tile to clicked
      tiles[id - 1].clicked = true;
      //message user, increase score
      this.setState({ tiles, message: synth + " -- Good Choice!" });
      this.state.score++;
      //if user reaches max score
      if (this.state.score === 12) {
        //message user, set high score, reset game after pause
        this.setState({ message: "Congrats -- You Won!", messageClass: "nav-text vibrate-1"})
        this.state.highScore = this.state.score;
        setTimeout(() => {
          this.resetGame();
        }, 3000); 
      }
    }
    // console.log(this.state.tiles);
  };

  //Shuffle function
  shuffleTiles = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  render() {
    return (
      <div>
        <Navbar
          resetGame={this.resetGame}
          message={this.state.message}
          score={this.state.score}
          highScore={this.state.highScore}
          messageClass={this.state.messageClass}
        />
        <Wrapper>
          <Header/>
          <TileWrapper>
            {this.shuffleTiles(this.state.tiles.map(tile => (
              <GameTiles
                tileClicked={this.tileClicked} 
                tileClass={this.state.tileClass}
                id={tile.id}
                key={tile.id}
                name={tile.name}
                image={tile.image}
                clicked={tile.clicked}
              />
            )))}
          </TileWrapper>
        </Wrapper>
      </div>
    );
  }
}

export default App;
