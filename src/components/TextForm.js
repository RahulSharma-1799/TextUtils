import React, { useState } from "react";

function TextForm(props) {
    const [text, setText] = useState("Enter text");
    // setText=useState('Set text');
    function handleUpClick() {
        // console.log("handleUpClick");
        let newText=text.toUpperCase();
        setText(newText);
    }
    function handleOnChange(event) {
        // console.log("onChange");
        setText(event.target.value)
    }
    return (
        <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    );
}

export default TextForm;
