import React from "react";
import "./logosearch.css";
import Logo from "../../img/logo.png";
import { UilSearch } from "@iconscout/react-unicons";
const Logosearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="wow" />
      <div className="search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default Logosearch;
