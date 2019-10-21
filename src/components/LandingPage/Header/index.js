import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="jumbotron-fluid">
      <h5>This game will challenge your memory!</h5>
      <hr></hr>
      <h1 className="display-4">Choose your weekly meal and cook at home.</h1>
      <h4>
        Click on different images to earn points! <br /> Allert! If you click on
        the same image twice, you'll loose your points and the game will
        restart!!
      </h4>

      <hr></hr>
      <span className="score">
        Score: {props.score} <br />
        High Score: {props.highscore}
      </span>
      <br />
      <span>{props.display}</span>
    </div>
  );
}
export default Header;
