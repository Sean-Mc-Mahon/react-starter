import React, { useState } from "react";

const CreateTweet = () => {
  //state
  const [textInput, setTextInput] = useState("");
  //functions
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  return (
    <form>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols="50"
        rows="5"
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
