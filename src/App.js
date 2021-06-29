import React, { useState } from "react";
//Import Components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  const [name, setName] = useState("Seanio");
  const message = "yo";
  return (
    <div>
      <TweetList setName={setName} name={name} message={message} />
      <CreateTweet />
    </div>
  );
}

export default App;
