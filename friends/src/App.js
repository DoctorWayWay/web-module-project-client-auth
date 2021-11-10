// Library Imports
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

// Context
import LoginContext from "./contexts/LoginContext";
import FriendsContext from "./contexts/FriendsContext";

// Component Imports
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [friends, setFriends] = useState([]);

  const loggedInStatus = () => {
    localStorage.getItem("token") ? setIsLoggedIn(true) : setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, loggedInStatus, friends, setFriends }}
    >
      <FriendsContext.Provider value={{ friends, setFriends }}>
        <div className="App">
          <NavBar />
          <Switch>
            <PrivateRoute exact path="/friends" component={FriendsList} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </FriendsContext.Provider>
    </LoginContext.Provider>
  );
};

export default App;
