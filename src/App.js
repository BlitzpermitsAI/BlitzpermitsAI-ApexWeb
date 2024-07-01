import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Page/Home";
import "./App.css";
import Compliance from "./Components/Page/Compliance.js";
import UserLogin from "./Components/Page/User/UserLogin.js";
import VerifyCode from "./Components/Page/VerifyCode/VerifyCode.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/verify-code" element={<VerifyCode />} />
      </Routes>
    </Router>
  );
}

export default App;
