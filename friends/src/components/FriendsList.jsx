// Library Imports
import React, { useEffect } from "react";

// Utilities
import axiosWithAuth from "../utilities/axiosWithAuth";

const FriendsList = () => {
  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div className="friends"></div>;
};

export default FriendsList;
