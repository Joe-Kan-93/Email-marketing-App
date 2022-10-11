import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../logo.svg";

function Login() {
  const [userData, setUserData] = useState({ password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });

  const history = useHistory();

  const handleInputChange = e => {
    setUserData(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    //if password field is empty, return error message
    if (userData.password === "") {
      setErrorMessage(prevState => ({
        value: "Empty password field"
      }));
    } else if (userData.password === "goodluck") {
      // Login Success
      const token = "123456abcdef";
      sessionStorage.setItem("Token", token);
      history.push("/software-development");
    } else {
      //If credentials entered is invalid
      setErrorMessage(prevState => ({ value: "Invalid password" }));
    }
  };

  return (
    <div id="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h1 className="focus-in-contract-bck">
          <a href="https://mailchimp.com/marketing-glossary/email-marketing/" target="_blank" rel="noreferrer">
            Email marketing App
          </a>
        </h1>
        <form>
          <div>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Your Password"
              onChange={e => handleInputChange(e)}
              // autoComplete="off"
              autoComplete="new-password"
            />
            <button
              type="submit"
              className="btn btn-dark"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>

          {errorMessage.value && (
            <p className="text-light"> {errorMessage.value} </p>
          )}
        </form>
      </header>
    </div>
  );
}

export default Login;
