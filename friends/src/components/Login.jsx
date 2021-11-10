// Library Imports
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((response) => {
        // console.log(response);
        localStorage.setItem("token", response.data.payload);
        setIsLoading(false);
        history.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </label>
      <button>Login</button>
    </form>
  );
};

export default Login;
