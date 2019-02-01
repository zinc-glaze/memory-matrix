import React from "react";
import "./style.css";

function GameTile(props) {
  return (
    <div 
      className={props.tileClass}
      onClick={() => props.tileClicked(props.id, props.name, props.clicked)}
    >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default GameTile;