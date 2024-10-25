import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // Removed the 'setAuthenticated' variable since it's not used in this component

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "110882118713-8tosq9r70m7j0vj1o9ia1sqln5imp3f8.apps.googleusercontent.com",
        scope: ""
      });
    }
    gapi.load('client: auth2', start);
  });

  const [popupStyle, showPopup] = useState("hide");
  const navigate = useNavigate();

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const onSuccess = (response) => {
    // No need to use 'setAuthenticated' in this component
    navigate('/');
  };

  const onFailure = (e) => {
    alert("User sign in Failed");
    console.log(e);
  };

  return (
    <>
      <div className="cover">
        <h1>Login</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />

        <div className="login-btn" onClick={popup}>
          Login
        </div>

        <p className="text">Or login using</p>

        <div className="alt-login">
          <div className="facebook"></div>
          <div className="google">
            <GoogleLogin
              className="logger"
              clientId="110882118713-8tosq9r70m7j0vj1o9ia1sqln5imp3f8.apps.googleusercontent.com"
              buttonText=""
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={false}
              icon={false}
              theme="dark"
            />
          </div>
        </div>
      </div>
      <div className={popupStyle}>
        <h3>Login Failed</h3>
        <p>Username or password incorrect</p>
      </div>
    </>
  );
};

export default LoginForm;
