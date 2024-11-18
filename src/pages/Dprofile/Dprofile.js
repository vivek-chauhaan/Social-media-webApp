import React from "react";
import "./Dpro.css";
import ProfileLeft from "../../Components/ProfileLeft/ProfileLeft";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import PostSide from "../../Components/PostSide/PostSide";
import RightSide from "../../Components/RightSide/RightSide";
const Dprofile = () => {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="profile-center">
        <ProfileCard />
        <PostSide />
      </div>
      <RightSide/>
    </div>
  );
};

export default Dprofile;
