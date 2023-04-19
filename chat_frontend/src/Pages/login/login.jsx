import React from "react";
import Image from "../../image/chat.png";
import Button from "@mui/material/Button";


function Login(props) {
  
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
                    value="Login account"
                  />          
              </div>
              <div className="Login-box"><h4>New to App? <Button>Sign Up</Button> </h4></div>  
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
