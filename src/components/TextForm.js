import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
    function handleUpClick() {
      let newText=text.toUpperCase();
      setText(newText);
      props.showAlert(" Convert to Uppercase!","success ");
    }
    function handleLoClick() {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert(" Convert to Lowercase!", "success ");
    }
    function handleClearClick() {
      let newText = "";
      setText(newText);
      props.showAlert(" Text Clear!", "success ");
    }
    function handleCopyClick() {
      let newText = document.getElementById('myBox');
      newText.select();
      navigator.clipboard.writeText(newText.value);
      props.showAlert(" Copy to Clipboard!", "success ");
    }
    function handleOnChange(event) {
        // console.log("onChange");
        setText(event.target.value)
    }
    return (
      <>
        <div className="container">
          <h1 className="mb-3">{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="myBox"
              rows="8"
              value={text}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-1"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-1"
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-1"
            onClick={handleClearClick}
          >
            Clear text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-1"
            onClick={handleCopyClick}
          >
            Copy text
          </button>
        </div>
        <div className="container my-3">
          <h1>Your text summary</h1>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </>
    );
}

export default TextForm;
