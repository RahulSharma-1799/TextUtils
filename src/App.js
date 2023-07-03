import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" />
        <Alert alert={alert} />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter,Character Counter"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
