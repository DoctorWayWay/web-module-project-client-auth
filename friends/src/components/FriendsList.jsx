// Library Imports
import React, { useEffect, useContext } from "react";
import FriendsContext from "../contexts/FriendsContext";

// Component Imports
import AddFriends from "./AddFriends";

// Utilities
import axiosWithAuth from "../utilities/axiosWithAuth";

const FriendsList = () => {
  const { friends, setFriends } = useContext(FriendsContext);
  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((response) => {
        setFriends(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="friends">
      {friends.map((friend, index) => {
        return (
          <div key={index}>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        );
      })}
      <AddFriends />
    </div>
  );
};

export default FriendsList;
