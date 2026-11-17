import './App.css';
import Navbar from './Navbar';
import Textforn from './Textforn';
// import About from './About';
import React, { useState } from 'react';
import Alert from './Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [mode1, setMode1] = useState('green');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#8fbaddc7';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  const toggleMode1 = () => {
    if (mode1 === 'green') {
      setMode1('red');
      document.body.style.backgroundColor = '#810e0ec7';
      showAlert('Red mode has been enabled', 'success');
    } else {
      setMode1('green');
      document.body.style.backgroundColor = '#0cbb78';
      showAlert('Green mode has been enabled', 'success');
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          mode={mode}
          mode1={mode1}
          toggleMode={toggleMode}
          toggleMode1={toggleMode1}
        />

        <Alert alert={alert} />

        <div className="container my-3">
           {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}

            {/* <Route
              exact path="/"
              element={ */}
                <Textforn
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}/>
                
              {/* }
            />
          </Routes>
       
      </Router>  */}
       </div>
    </>
  );
}

export default App;