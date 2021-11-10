// Library Imports
import React, { useEffect, useContext } from "react";
import FriendsContext from "../contexts/FriendsContext";

// Utilities
import axiosWithAuth from "../utilities/axiosWithAuth";

const FriendsList = (props) => {
  const { friends, setFriends } = useContext(FriendsContext);
  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div className="friends"></div>;
};

export default FriendsList;
