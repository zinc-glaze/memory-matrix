import React from "react";
import "./style.css";

function TileWrapper(props) {
  return <div className="tile-wrapper">{props.children}</div>;
}

export default TileWrapper;
