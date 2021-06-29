import React from "react";
//Import Components
import Tweet from "./Tweet";

const TweetList = ({ name, message, setName }) => {
  return (
    <div className="tweet-list">
      <Tweet name={name} message={message} />
      <Tweet name={name} message={message} />
      <Tweet name={name} message={message} />
      <button onClick={() => setName("JoJo")}>Click</button>
    </div>
  );
};

export default TweetList;
