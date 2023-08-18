import React from "react";
import bollywoodhits from "../../assest/bollywoodhits.svg";
import "./card.css";
import Chip from "@mui/material/Chip";

const card = () => {
  return (
    <div className="card">
      <div className="card-main">
        <img src={bollywoodhits} alt="bollywood" />
        <div className="chip">
            <Chip label="100M Follows" />
        </div>
        
      </div>
      <div className="category">New Bollywood</div>
    </div>
  );
};

export default card;
