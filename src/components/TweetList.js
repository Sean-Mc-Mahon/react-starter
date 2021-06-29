import React from "react";
//Import Components
import Tweet from "./Tweet";

const TweetList = ({ name, tweets }) => {
  return (
    <div className="tweet-list">
      <Tweet name={name} tweets={tweets[0]} />
    </div>
  );
};

export default TweetList;
