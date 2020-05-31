import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import {
  loginPage,
  loginText,
  loginBox,
  fields,
  button,
  input,
} from './styles';
import { loginRequest } from '../actions';

const LoginForm = (props) => {
  const [userName, setUser] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    const { dispatch } = props;
    if (userName === 'test' && password === 'test1234') {
      dispatch(loginRequest());
    }
  };

  return (
    <div name="1" className={loginPage}>
      <Helmet>
        <title>Survey</title>
      </Helmet>
      <div name="2" className={loginBox}>
        <p className={loginText}>Let&apos;s get you started</p>
        <div className={fields}>
          <input
            name="userName"
            className={input}
            onBlur={(e) => setUser(e.target.value)}
            type="email"
            placeholder="Username"
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                loginUser();
              }
            }}
          />
          <input
            name="password"
            className={input}
            type="password"
            placeholder="Password"
            onBlur={(e) => setPassword(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                loginUser();
              }
            }}
          />
          <button className={button} type="button" onClick={() => loginUser()}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default LoginForm;
