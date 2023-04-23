import React, { useState } from "react";
import SignUp from "../signup/signup";
import Login from "../login/login";
import Chatpage from "../chatpage/chatpage";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Dashboard() {

  // const history = useHistory();

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("userInfo"));

  //   if (user) history.push("/chats");
  // }, [history]);

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
        <Chatpage />
        {/* {toggles ? (
          <SignUp listenToSignUpPage={listenToSignUpPage} />
        ) : (
          <Login listenToLoginPage={listenToLoginPage} />
        )} */}
      </div>
    </div>
  );
}

export default Dashboard;