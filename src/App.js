import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😀": "Grinning Face",
  "😉": "Winking Face",
  "😘": "Face Blowing a Kiss",
  "🤗": "Smiling Face with Open Hands",
  "🤐": "Zipper-Mouth Face",
  "🏂": "SnowBoarder",
  "🏌️": "Person Golfing",
  "🚣": "Person Rowing Boat",
  "🎪": "Circus Tent",
  "🏀": "Basketball"
};
let emoJisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  let [emoji, setEmoji] = useState("");
  //Shows meaning from the given input
  function emojiInterpreter(event) {
    let inputEmoji = event.target.value;
    let meaning = emojiDictionary[inputEmoji];
    setEmoji(meaning);
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
      setEmoji(meaning);
    }
  }
  //this function takes the clicked emoji and shows its meaning
  function emojiClickHandler(event) {
    let clickedEmojiMeaning = emojiDictionary[event.target.innerText];
    setEmoji(clickedEmojiMeaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInterpreter}></input>
      <div className="meaning">{emoji}</div>
      <h3>Emojis we know</h3>
      {emoJisWeKnow.map((emoji) => {
        return (
          <span onClick={emojiClickHandler} key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
