// Library Imports
import React, { useState, useContext } from "react";
import FriendsContext from "../contexts/FriendsContext";
import axiosWithAuth from "../utilities/axiosWithAuth";

const AddFriends = () => {
  const { friends, setFriends } = useContext(FriendsContext);
  const [newFriend, setNewFriend] = useState({
    id: friends.length + 1,
    name: "",
    age: null,
    email: "",
  });

  const handleChange = (event) => {
    setNewFriend({
      ...newFriend,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then((response) => {
        console.log("Friend has been submitted!");
        setFriends(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a friend!</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Friend's Name..."
          value={newFriend.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          type="text"
          name="age"
          placeholder="Friend's Age..."
          value={newFriend.age}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          placeholder="Friend's Email..."
          value={newFriend.email}
          onChange={handleChange}
        />
      </label>
      <button>Submit Friend</button>
    </form>
  );
};

export default AddFriends;
