import React, { useState } from "react";

// import img from "./img.svg";

import "./styles.css";

const emojiDictionary = {
  "🤣": "Laughing alot",
  "😂": "Laughing",
  "🤔": "Thinking Face",
  "😞": "Disappointed Face",
  "😫": "Tired Face",
  "🙏": "Namste!!",
  "❤️": "Heart",
  "😭": "Crying Face",
  "😥": "Sad Face"
};

export default function App() {
  const [meaning, setmeaning] = useState(" ");

  function changehandler(event) {
    var userinput = event.target.value;

    var meaning = emojiDictionary[userinput];

    if (meaning === undefined) {
      meaning = (
        <span style={{ color: "red" }}>"sorry, Not present in DataBase"</span>
      );
    }

    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h2>
        {" "}
        <span>
          <span style={{ color: "red" }}>E</span>
          <span style={{ color: "blue" }}>M</span>
          <span style={{ color: "orange" }}>O</span>
          <span style={{ color: "green" }}>J</span>
          <span style={{ color: "black" }}>i</span>
          <span style={{ color: "red" }}>-</span>
          <span style={{ color: "brown" }}>H</span>
          <span style={{ color: "yellow" }}>u</span>
          <span style={{ color: "purple" }}>B</span>
        </span>
      </h2>

      <input placeholder="DRop your Emoji here .." onChange={changehandler} />

      <h2>{meaning} </h2>
    </div>
  );
}
