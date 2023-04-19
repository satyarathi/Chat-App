import React from "react";
import "./signup.css";
import Image from "../../image/chat.png";
import Button from "@mui/material/Button";
import { registerUser } from "../../service/userservice";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const nameReg = /^[A-Z]{1}[a-zA-Z]+$/;

function SignUp(props) {

  const clickLogin = () => {
    props.listenToSignUpPage();
  };
 
  const [signupObj, setSignupObj] = React.useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [errorObj, setErrorObj] = React.useState({
    fullNameError: false,
    fullNameHelper: "",
    emailError: false,
    emailHelper: "",
    passwordError: false,
    passwordHelper: "",
  });

  const takefullName = (a) => {
    setSignupObj((prevState) => ({ ...prevState, fullname: a.target.value }));
  };
  const takeEmail = (event) => {
    setSignupObj((prevState) => ({ ...prevState, email: event.target.value }));
  };
  const takePassword = (e) => {
    setSignupObj((prevState) => ({ ...prevState, password: e.target.value }));
  };

  const submit = async (event) => {
    event.preventDefault()
    console.log("submit triggered")
    let fullNameTest = nameReg.test(signupObj.fullname);
    let emailTest = emailRegex.test(signupObj.email);
    let passwordTest = passwordRegex.test(signupObj.password);

    if (fullNameTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        fullNameError: true,
        fullNameHelper: "enter correct firstname",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        fullNameError: false,
        fullNameHelper: "",
      }));
    }

    if (emailTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        emailError: true,
        emailHelper: "enter correct email",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        emailError: false,
        emailHelper: "",
      }));
    }
    if (passwordTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        passwordError: true,
        passwordHelper: "enter correct password",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        passwordError: false,
        passwordHelper: "",
      }));
    }

    if (
      true
    ) {
      console.log("prepared for backend",signupObj)
      let response = await registerUser(signupObj);
      console.log(response);
    }
  }
  return (
    <div className="signin-page">
      <div className="container">
        <div
          className="image-box"
          style={{
            backgroundImage: "url(" + Image + ")",
            backgroundSize: "100% 100%",
          }}
        ></div>
        <div className="form">
          <div className="form-section">
            <form action="">
              <div className="text-box">
              <h3 className="heading1">Create account</h3>
              </div>
              <div className="text-box">
                <input
                  type="text"
                  name="name"
                  className="control"
                  placeholder="Enter Full Name..."
                  onChange={takefullName}
                  error={errorObj.fullNameError}
                  helperText={errorObj.fullNameHelper}
                />
              </div>
              <div className="text-box">
                <input
                  type="email"
                  name="name"
                  className="control"
                  placeholder="Enter Email..."
                  onChange={takeEmail}
                  error={errorObj.emailError}
                  helperText={errorObj.emailHelper}
                />
              </div>
              <div className="text-box">
                <input
                  type="password"
                  name="name"
                  className="control"
                  placeholder="Enter Password..."
                  onChange={takePassword}
                  error={errorObj.passwordError}
                  helperText={errorObj.passwordHelper}
                />
              </div>

              <div className="text-box m20">    
                  <input
                    type="submit"
                    name="name"
                    className="btn"
                    value="Create account"
                    onClick={submit}
                  />   
              </div>
              <div className="Login-box"><h4>Already have an Account? <Button onClick={clickLogin}>Login</Button> </h4></div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
