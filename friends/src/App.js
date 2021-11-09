import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
