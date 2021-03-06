import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import GoogleLogin from 'react-google-login'

import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  if (sessionUser) {
    return <Redirect to="/dashboard" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  const authGoogle = (googleUser) => {
    setErrors([]);
    const credential = googleUser.profileObj.email
    const googleToken = googleUser.getAuthResponse().id_token;
    const password = googleToken;
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  }

  const demoLogin = () => {
    let credential = 'demo@user.io';
    let password = 'password'
    return dispatch(sessionActions.login({credential, password})).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  }

  return (
    <>
    <div className="auth-title">
    <h1 className="auth-groovy"><span>L</span><span>o</span><span>g</span><span> </span><span>I</span><span>n</span></h1>
    </div>
      
      <div> <GoogleLogin
    clientId="622766758827-gh1ghhp6c880n96e571stc5gm34rsp96.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={authGoogle}
    onFailure={authGoogle}
    cookiePolicy={'single_host_origin'}
    /> </div>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          <input
            type="text"
            placeholder="email or username"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
      </form>
      <button type="button" onClick={demoLogin}>Demo Login</button>

    </>
  );
}

export default LoginForm;
