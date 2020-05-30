import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { loginContainer, loginBox } from './styles';
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
    <article>
      <Helmet>
        <title>Survey</title>
      </Helmet>
      <div className={loginBox}>
        <div className={loginContainer}>
          <i className="LoginText">Let&apos;s get you started</i>
          <div className="fields">
            <div className="field is-fullwidth ">
              <div className="control has-icons-left has-icons-right">
                <input
                  name="email"
                  className="input"
                  onBlur={(e) => setUser(e.target.value)}
                  type="email"
                  placeholder="Email"
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      loginUser();
                    }
                  }}
                />
              </div>
            </div>
            <div className="field is-fullwidth ">
              <div className="control has-icons-left has-icons-right">
                <input
                  name="password"
                  className="input"
                  type="password"
                  placeholder="Password"
                  onBlur={(e) => setPassword(e.target.value)}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      loginUser();
                    }
                  }}
                />
              </div>
            </div>
            <button type="button" onClick={() => loginUser()}>
              Login
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default LoginForm;
