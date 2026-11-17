import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("convert into uppercase!","success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("convert into lowercase!","success")
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    // Credits: A
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" style={{backgroundColor: props.mode=== 'dark' ? 'white' : '#042743',color: props.mode === 'dark' ? 'black' : '#ffffff'}}onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" style={{backgroundColor: props.mode=== 'dark' ? 'white' : '#042743',color: props.mode === 'dark' ? 'black' : '#ffffff'}}onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" style={{backgroundColor: props.mode=== 'dark' ? 'white' : '#042743',color: props.mode === 'dark' ? 'black' : '#ffffff'}}onClick={handleClearClick}>Clear Text</button> 
                <button className="btn btn-primary mx-1" style={{backgroundColor: props.mode=== 'dark' ? 'white' : '#042743',color: props.mode === 'dark' ? 'black' : '#ffffff'}}onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" style={{backgroundColor: props.mode=== 'dark' ? 'white' : '#042743',color: props.mode === 'dark' ? 'black' : '#ffffff'}}onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split("  ").length-1} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>    
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}