// Library Imports
import React from "react";
import { Switch, Route } from "react-router-dom";

// Component Imports
import NavBar from "./components/NavBar";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
