import React from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import Notlike from "../../img/notlike.png";

const Post = ({ data }) => {
  return (
    <div className="post">
      <img src={data.img} alt="nice" />
      <div className="postReact">
        <img src={data.liked ? Heart : Notlike} alt="nice" />
        <img src={Comment} alt="nice" />
        <img src={Share} alt="nice" />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "15px" }}>
        {data.likes}likes
      </span>
      <div className="deatil">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
