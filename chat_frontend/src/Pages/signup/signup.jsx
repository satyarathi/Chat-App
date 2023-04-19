import React from "react";
import "./signup.css";
import Image from "../../image/chat.png";
import Button from "@mui/material/Button";

function SignUp(props) {

  const clickLogin = () => {
    props.listenToSignUpPage();
  };
 
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
                />
              </div>
              <div class="text-box">
                <input
                  type="email"
                  name="name"
                  className="control"
                  placeholder="Enter Email..."
                />
              </div>
              <div class="text-box">
                <input
                  type="password"
                  name="name"
                  className="control"
                  placeholder="Enter Password..."
                />
              </div>

              <div className="text-box m20">    
                  <input
                    type="submit"
                    name="name"
                    className="btn"
                    value="Create account"
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
