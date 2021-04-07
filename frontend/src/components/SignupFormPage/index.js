import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import GoogleLogin from 'react-google-login'

import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const authGoogle = (googleUser) => {
    console.log(googleUser.profileObj, "The google user object")
    const email = googleUser.profileObj.email
    const username = googleUser.profileObj.givenName
    const googleToken = googleUser.getAuthResponse().id_token;
    const password = googleToken;
    setErrors([])
    console.log(email)
    
    return dispatch(sessionActions.signup({ email, username, password }))
    .catch(res => {
      if (res.data && res.data.errors) setErrors(res.data.errors);
    });

  }

  return (
    <div className="signup-wrapper">
      <h1>Sign Up</h1>
      <div> <GoogleLogin
    clientId="622766758827-gh1ghhp6c880n96e571stc5gm34rsp96.apps.googleusercontent.com"
    buttonText="Sign up with Google"
    onSuccess={authGoogle}
    onFailure={authGoogle}
    cookiePolicy={'single_host_origin'}
    /> </div>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupFormPage;
