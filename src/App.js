import React, { useState, useEffect } from "react";
//Import Components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
import s from "./style/App.module.css";

function App() {
  //state
  const [name, setName] = useState("Seany");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    console.log("Run");
  }, [tweets]);
  return (
    <div>
      <h1 className={s.title}>Twitter Type Thing </h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
