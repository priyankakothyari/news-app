import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alerts from "./components/Alerts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("primary");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    console.log("toggleMode is working");

    if (mode === "primary") {
      setmode("dark");
      document.body.style.backgroundColor = "#1c3e4a";
      showAlert("Enabled Dark Mode", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setmode("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Enabled Light Mode", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <> 
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About-Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alerts alert={alert} />
      
      <Switch>
        <Route exact path="/"><Textform
        showAlert={showAlert}
        heading="Enter the text to analyze"
        mode={mode}/> </Route>

        <Route exact path="/about">
          <About/></Route>
      </Switch>
    
    </Router>
  </>
  );
}

export default App;
