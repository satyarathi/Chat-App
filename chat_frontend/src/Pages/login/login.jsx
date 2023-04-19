import React from "react";
import Image from "../../image/chat.png";
import Button from "@mui/material/Button";
import { loginUser } from "../../service/userservice";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function Login(props) {
    const clickSignup = () => {
        props.listenToLoginPage();
    }
        const [loginObj, setloginObj] = React.useState({
            email: "",
            password: "",
          });
          const [errorObj, setErrorObj] = React.useState({
            emailError: false,
            emailHelper: "",
            passwordError: false,
            passwordHelper: "",
          });
        
          const takeEmail = (event) => {
            setloginObj((prevState) => ({ ...prevState, email: event.target.value }));
          };
          const takePassword = (e) => {
            setloginObj((prevState) => ({ ...prevState, password: e.target.value }));
          };
        
          const submit = async (event) => {
            event.preventDefault()
            let emailTest = emailRegex.test(loginObj.email);
            let passwordTest = passwordRegex.test(loginObj.password);
        
        
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
              emailTest === true &&
              passwordTest === true
            ) {
                let response = await loginUser(loginObj);
                console.log(
                  "response------------------------------------------>",
                  response
                );
                localStorage.setItem("token", response.data.data.token);
               
              }
            
    }
  return (
    <div className="login-page">
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
              <h3 className="heading1">Login</h3>
              </div>
             
              <div class="text-box">
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
              <div class="text-box">
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
                    value="Login account"
                    onClick={submit}
                  />
                
              </div>
              <div className="Login-box"><h4>New to App? <Button onClick={clickSignup}>Sign Up</Button> </h4></div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;