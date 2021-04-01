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
    console.log(sessionUser)
    return <Redirect to="/" />;
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
  return (
    <>
      <h1>Log In</h1>
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
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  );
}

export default LoginForm;
