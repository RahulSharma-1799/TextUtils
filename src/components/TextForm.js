import React, { useState } from "react";

function TextForm(props) {
    const [text, setText] = useState("Enter text");
    function handleUpClick() {
        // console.log("handleUpClick");
        let newText=text.toUpperCase();
        setText(newText);
    }
    function handleLoClick() {
      let newText = text.toLowerCase();
      setText(newText);
    }
    function handleClearClick() {
      let newText = "";
      setText(newText);
    }
    function handleCopyClick() {
      let newText = document.getElementById('myBox');
      newText.select();
      navigator.clipboard.writeText(newText.value);
    }
    function handleOnChange(event) {
        // console.log("onChange");
        setText(event.target.value)
    }
    return (
      <>
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="myBox"
              rows="8"
              value={text}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
            Copy text
          </button>
        </div>
        <div className="container my-3">
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </>
    );
}

export default TextForm;
