import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import ChoosePlanPage from "./components/ChoosePlanPage";
import HomePage from "./components/HomePage";


function App() {
  return (
    // <Wrapper>
      <Router>
        <Route path="/login" component={LoginPage} />
        <Route path="/plans" component={ChoosePlanPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/home" component={HomePage} />
      </Router>
    // </Wrapper>
  );
}

export default App;
