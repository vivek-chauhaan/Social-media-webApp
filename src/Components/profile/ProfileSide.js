import React from "react";
import Logosearch from "../Logosearch/Logosearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import FollowerCard from "../FollowerCard/FollowerCard";

import "./ProfileSide.css";
const ProfileSide = () => {
  return (
    <div className="profileSide">
      <Logosearch />
      <ProfileCard />
      <FollowerCard />
    </div>
  );
};

export default ProfileSide;
