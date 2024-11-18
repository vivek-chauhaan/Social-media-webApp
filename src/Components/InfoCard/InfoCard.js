import React from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";


const InfoCard = () => {

  return (
    <div className="infocard">
      <div className="infohead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
           
          />
         
          
        </div>
      </div>
      <div className="info">
        <sapn>
          <b>Status</b>
        </sapn>
        <span>&nbsp;In reatonShips</span>
      </div>
      <div className="info">
        <sapn>
          <b>Lives In</b>
        </sapn>
        <span>&nbsp;Borondi</span>
      </div>
      <div className="info">
        <sapn>
          <b>Work In</b>
        </sapn>
        <span>&nbsp;Borondi Corporation pvt. ltd.</span>
      </div>

      <button className="button logout-button">Log Out</button>
    </div>
  );
};

export default InfoCard;
