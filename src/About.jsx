import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: '#ffffff',
    backgroundColor: '#000000'
  });

  const [btnText, setBtnText] = useState('Enable Light Mode');

  const toggleStyle = () => {
    if (myStyle.color === '#ffffff') {
      setMyStyle({
        color: '#000000',
        backgroundColor: '#ffffff'
      });

      setBtnText('Enable Dark Mode');
    } else {
      setMyStyle({
        color: '#ffffff',
        backgroundColor: '#000000'
      });

      setBtnText('Enable Light Mode');
    }
  };

  return (
    <div className="container my-3">
      <h1>About us</h1>

      <div className="accordion" style={myStyle}>
        <details className="accordion-item" name="accordionExample" open>
          <summary className="accordion-header" style={myStyle}>
            Accordion Item #1
            <svg
              className="accordion-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m2 5 6 6 6-6" />
            </svg>
          </summary>

          <div className="accordion-body" style={myStyle}>
            <strong>This is the first item’s accordion body.</strong> It is
            shown by default because the <code>open</code> attribute is
            present.
          </div>
        </details>

        <details className="accordion-item" name="accordionExample">
          <summary className="accordion-header" style={myStyle}>
            Accordion Item #2
            <svg
              className="accordion-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m2 5 6 6 6-6" />
            </svg>
          </summary>

          <div className="accordion-body" style={myStyle}>
            <strong>This is the second item’s accordion body.</strong> The{' '}
            <code>name</code> attribute groups this with other accordion
            items.
          </div>
        </details>

        <details className="accordion-item" name="accordionExample">
          <summary className="accordion-header" style={myStyle}>
            Accordion Item #3
            <svg
              className="accordion-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m2 5 6 6 6-6" />
            </svg>
          </summary>

          <div className="accordion-body" style={myStyle}>
            <strong>This is the third item’s accordion body.</strong> This
            exclusive accordion behavior is built into the browser.
          </div>
        </details>
      </div>

      <div className="container my-4">
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-primary"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}