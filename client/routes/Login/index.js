import React from 'react';
import { connect } from 'react-redux';
import { loginReducer } from './reducer';
import loginSaga from './saga';
import LoginForm from './components/LoginForm';
import { useInjectReducer } from '../../reducers/injectReducer';
import { useInjectSaga } from '../../saga/injectSaga';

const Login = (props) => {
  useInjectReducer({ key: 'loginReducer', reducer: loginReducer });
  useInjectSaga({ key: 'loginSaga', saga: loginSaga });

  return <LoginForm {...props} />;
};

function mapStateToProps(props) {
  return {
    // user: props.loginReducer.user
    ...props,
  };
}
export default connect(mapStateToProps)(Login);
