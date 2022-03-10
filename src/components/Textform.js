import React from "react";
import { useState } from "react";

export default function Textform(props) {
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
    
  };

  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const capitalizeFirstLetter = () => {
    console.log("first alphabate will be capitalize");
    let newText = text[0].toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("first alphabate capitalized!", "success");
  };
  const handleCopy = () => {
    console.log("clicked in copybtn");
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied", "success");
  };
  const handleExtraSpaces = () => {
    console.log("clicked in extraspaces");
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showAlert("Added extraspaces", "success");
  };

  const [text, setText] = useState("");
  newFunction();
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            id="myBox"
            cols="100"
            rows="8"
            style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black' }}

          ></textarea>
        </div>
        <button className={`btn btn-${props.mode} btn-outline-light mx-2`} onClick={handleUpClick}>
          convert to Uppercase
        </button>
        <button className={`btn btn-${props.mode} btn-outline-light mx-2`} onClick={handleLoClick}>
          convert to Lowercase
        </button>
        <button className={`btn btn-${props.mode} btn-outline-light mx-2`} onClick={capitalizeFirstLetter}>Click to capitalize
        </button>
        <button className={`btn btn-${props.mode} btn-outline-light mx-2`} onClick={handleCopy}>Click to copy
        </button>
        <button className={`btn btn-${props.mode} btn-outline-light mx-2`} onClick={handleExtraSpaces}>Remove Extra Spaces
        </button>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes to read</p>
        <h2>preview</h2>
        <p>{text}</p>
        <h3>Number of sentences</h3>
        <p>{text.split(".").length}</p>
      </div>
    </>
  );

  function newFunction() {
    if (text.startsWith("a-z")) {
      console.log("newFunction is working");
      let newText = text.index[0].toUpperCase();
      setText(newText);
    }
  }
}
