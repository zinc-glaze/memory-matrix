import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div id="navbar">
      <h3 className="nav-text" id="restart" onClick={() => props.resetGame()}>Reset Game</h3>
      <h2 className={props.messageClass} id="message">{props.message}</h2>
      <h3 className="nav-text" id="score"><span>Score: {props.score}</span><span> | </span><span>High Score: {props.highScore}</span></h3>
    </div>
  );
}

export default Navbar;