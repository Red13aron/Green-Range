import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import ChoosePlanPage from "./components/ChoosePlanPage";
import HomePage from "./components/HomePage";
import ingredientsPage from "./components/IngredientsListPage";



function App() {
  return (
    // <Wrapper>
      <Router>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/plans" component={ChoosePlanPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/ingredients" component={ingredientsPage} />

      </Router>
    // </Wrapper>
  );
}

export default App;
