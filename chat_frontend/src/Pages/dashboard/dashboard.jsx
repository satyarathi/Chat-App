import React, { useState } from "react";
import SignUp from "../signup/signup";
import Login from "../login/login";


function Dashboard() {
  const [toggles, setToggle] = useState(true);

  const listenToSignUpPage = () => {
    setToggle(false);
  };

  const listenToLoginPage = () => {
    setToggle(true);
  };
  return (
    <div>
      <div>
        {toggles ? (
          <SignUp listenToSignUpPage={listenToSignUpPage} />
        ) : (
          <Login listenToLoginPage={listenToLoginPage} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;