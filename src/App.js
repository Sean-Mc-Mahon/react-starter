import React, { useState } from "react";
//Import Components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  //state
  const [name, setName] = useState("Seany");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const message = "yo";
  return (
    <div>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} />
    </div>
  );
}

export default App;
