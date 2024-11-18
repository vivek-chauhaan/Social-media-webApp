import React from "react";
import "./ProfileLeft.css";

import FollowerCard from "../FollowerCard/FollowerCard";
import InfoCard from "../InfoCard/InfoCard";

import Logosearch from "../Logosearch/Logosearch";

const ProfileLeft = () => {
  return (
    <div className="profileleft">
      <Logosearch />

      <InfoCard />

      <FollowerCard />
    </div>
  );
};

export default ProfileLeft;
