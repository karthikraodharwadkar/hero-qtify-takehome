import React from "react";
import "./card.css";
import Chip from "@mui/material/Chip";

function card(props) {
  return (
    <>
      <div className="card-container">
        <div>
          <div className="upper-card">
            <div className="card-image">
              <img
                src={props.image}
                alt=""
                width="160px"
                height="180px"
                object-fit="contain"
              />
            </div>
            <div className="chip-section">
              <Chip label={`${props.follows} follows`} className="chip"/>
            </div>
          </div>
          <div className="lower-card">
            <p>{props.title}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default card;
